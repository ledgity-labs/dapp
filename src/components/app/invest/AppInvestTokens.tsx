import { Amount, Button, Card, Rate } from "@/components/ui";
import React, { FC, useEffect, useRef, useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { twMerge } from "tailwind-merge";
import { TokenLogo } from "../../ui/TokenLogo";
import { DepositDialog } from "../DepositDialog";
import { WithdrawDialog } from "../WithdrawDialog";
import { getGenericErc20, getLToken } from "@/generated";
import { useAvailableLTokens } from "@/hooks/useAvailableLTokens";
import { getContractAddress } from "@/lib/getContractAddress";
import { Spinner } from "@/components/ui/Spinner";
import { formatUnits, parseUnits, zeroAddress } from "viem";
import { watchReadContracts } from "@wagmi/core";
import { ContractId } from "../../../../contracts/deployments";
import clsx from "clsx";
import { usePublicClient, useWalletClient } from "wagmi";
import { getTokenUSDRate } from "@/lib/getTokenUSDRate";
import { chunkArray } from "@/lib/chunkArray";

interface Pool {
  tokenSymbol: string;
  apr: number;
  tvl: [bigint, number];
  invested: [bigint, number];
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {}
/**
 * About 'tableData', 'futureTableData' and 'isActionsDialogOpen': As the table is automatically
 * refreshed when on-chain data changes, and while DepositDialog and WithdrawDialog contained in the
 * table, if the data changes while the dialog is open, the dialog will be closed. This incurs a bad user
 * experience. To prevent this:
 *
 * 1. We track if any actions dialog is opened in 'isActionsDialogOpen' ref
 * 2. When new data are received, if not actions dialog are opened -> call setTableData() instantly
 * 3. Else we store the new data into 'futureTableData' ref to prevent causing a re-render of the table
 *    while the user is in deposit/withdraw modals
 * 4. Finally, when the user closes the action modal, we call 'setTableData(futureTableData)' to provides it
 *    with most up to date data.
 */
export const AppInvestTokens: FC<Props> = ({ className }) => {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const [sorting, setSorting] = useState<SortingState>([]);
  const columnHelper = createColumnHelper<Pool>();
  const lTokens = useAvailableLTokens();
  const [tableData, setTableData] = useState<Pool[]>([]);
  const [initialFetch, setInitialFetch] = useState(false);
  let isActionsDialogOpen = useRef(false);
  let futureTableData = useRef<Pool[]>([]);

  const columns = [
    columnHelper.accessor("tokenSymbol", {
      header: "Name",
      cell: (info) => {
        const tokenSymbol = info.getValue();
        return (
          <div className="flex gap-3 items-center">
            <TokenLogo symbol={tokenSymbol} size={35} />
            <p>{tokenSymbol}</p>
          </div>
        );
      },
    }),
    columnHelper.accessor("apr", {
      cell: (info) => <Rate value={info.getValue()} />,
      header: "APR",
    }),
    columnHelper.accessor("tvl", {
      cell: (info) => {
        const [amount, decimals] = info.getValue() as [bigint, number];
        const tokenSymbol = info.row.getValue("tokenSymbol") as string;
        return <Amount value={amount} decimals={decimals} suffix={tokenSymbol} displaySymbol={false} />;
      },
      header: "TVL",
    }),
    columnHelper.accessor("invested", {
      cell: (info) => {
        const [amount, decimals] = info.getValue() as [bigint, number];
        const tokenSymbol = info.row.getValue("tokenSymbol") as string;
        return <Amount value={amount} decimals={decimals} suffix={tokenSymbol} displaySymbol={false} />;
      },
      header: "Invested",
    }),
    columnHelper.display({
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const tokenSymbol = row.getValue("tokenSymbol") as string;
        return (
          <div className="inline-flex gap-4">
            <DepositDialog
              underlyingSymbol={tokenSymbol}
              onOpenChange={(o) => {
                isActionsDialogOpen.current = o;
                if (o === false && futureTableData.current.length > 0) {
                  setTableData(futureTableData.current);
                  futureTableData.current = [];
                }
              }}
            >
              <Button size="small">Deposit</Button>
            </DepositDialog>
            <WithdrawDialog
              underlyingSymbol={tokenSymbol}
              onOpenChange={(o) => {
                isActionsDialogOpen.current = o;
                if (o === false && futureTableData.current.length > 0) {
                  setTableData(futureTableData.current);
                  futureTableData.current = [];
                }
              }}
            >
              <Button size="small" variant="outline">
                Withdraw
              </Button>
            </WithdrawDialog>
          </div>
        );
      },
    }),
  ];
  const sortableColumns = ["apr", "tvl", "invested"];

  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  const headerGroup = table.getHeaderGroups()[0];

  function watchData() {
    if (publicClient.chain) {
      let reads: Parameters<typeof watchReadContracts>[0]["contracts"] = [];
      for (const lTokenId of lTokens) {
        const lTokenContractAddress = getContractAddress(lTokenId, publicClient.chain.id);
        const underlyingContractAddress = getContractAddress(
          lTokenId.slice(1) as ContractId,
          publicClient.chain.id,
        );
        if (!lTokenContractAddress || !underlyingContractAddress)
          console.error(
            "Some contracts addresses are missing for the current chain. Cannot watch data.",
          );
        else {
          const lTokenContract = getLToken({ address: lTokenContractAddress });
          const underlyingContract = getGenericErc20({ address: underlyingContractAddress });
          reads = [
            ...reads,
            {
              address: underlyingContract.address,
              abi: underlyingContract.abi,
              functionName: "symbol",
            },
            {
              address: lTokenContract.address,
              abi: lTokenContract.abi,
              functionName: "balanceOf",
              args: [walletClient ? walletClient.account.address : zeroAddress],
            },
            {
              address: lTokenContract.address,
              abi: lTokenContract.abi,
              functionName: "decimals",
            },
            {
              address: lTokenContract.address,
              abi: lTokenContract.abi,
              functionName: "totalSupply",
            },
            {
              address: lTokenContract.address,
              abi: lTokenContract.abi,
              functionName: "getApr",
            },
          ];
        }
      }

      // If there are nothing to read, set initial fetch to true
      if (reads.length === 0) setInitialFetch(true);
      // Else, watch array of function reads
      else {
        return watchReadContracts(
          {
            contracts: reads,
            listenToBlock: true,
          },
          (data) => {
            const _tableData: Pool[] = [];
            for (const rowData of chunkArray(data, 5)) {
              const tokenSymbol = rowData[0].result! as string;
              const investedAmount = rowData[1].result! as bigint;
              const decimals = rowData[2].result! as number;
              const tvl = rowData[3].result! as bigint;
              const apr = rowData[4].result! as number;

              _tableData.push({
                tokenSymbol: tokenSymbol,
                invested: [investedAmount, decimals],
                tvl: [tvl, decimals],
                apr: apr,
              });
            }
            if (!isActionsDialogOpen.current) setTableData(_tableData);
            else futureTableData.current = _tableData;
            setInitialFetch(true);
          },
        );
      }
    }
  }

  useEffect(() => {
    setInitialFetch(false);
    return watchData();
  }, [walletClient, publicClient.chain]);

  return (
    <article className={className}>
      <div className="grid grid-cols-[2fr,2fr,2fr,2fr,3fr] font-semibold mb-3 px-6 text-fg/80">
        {headerGroup.headers.map((header, index) => {
          return (
            <div
              key={header.id}
              style={{
                gridColumnStart: index + 1,
              }}
              className={twMerge(
                "flex justify-center items-center",
                header.column.id === "tokenSymbol" && "justify-start pl-6",
              )}
            >
              {(() => {
                const content = flexRender(header.column.columnDef.header, header.getContext());
                if (sortableColumns.includes(header.column.id))
                  return (
                    <button
                      onClick={() => header.column.toggleSorting(header.column.getIsSorted() === "asc")}
                      className="relative flex items-center gap-1"
                    >
                      {content}
                      <span
                        className={clsx("text-fg/60", header.column.id !== "apr" && "absolute -right-5")}
                      >
                        {(() => {
                          switch (header.column.getIsSorted()) {
                            case "asc":
                              return <i className="ri-sort-desc"></i>;
                            case "desc":
                              return <i className="ri-sort-asc"></i>;
                            default:
                              return <i className="ri-expand-up-down-fill"></i>;
                          }
                        })()}
                      </span>
                    </button>
                  );
                else return content;
              })()}
            </div>
          );
        })}
      </div>
      {(!initialFetch && (
        <div className="w-full flex justify-center items-center mt-10">
          <Spinner />
        </div>
      )) || (
        <>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Card
                key={row.id}
                circleIntensity={0.07}
                data-state={row.getIsSelected() && "selected"}
                className="grid grid-cols-[2fr,2fr,2fr,2fr,3fr] mb-4 py-6 px-6 font-medium text-base animate-fadeAndMoveIn"
              >
                {row.getVisibleCells().map((cell, index) => (
                  <div
                    key={cell.id}
                    className={twMerge(
                      "flex items-center",
                      cell.column.id !== "tokenSymbol" && "justify-center",
                      cell.column.id === "actions" && "justify-end",
                      cell.column.id === "apr" && "text-indigo-800 font-bold",
                    )}
                    style={{
                      gridColumnStart: index + 1,
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                ))}
              </Card>
            ))
          ) : (
            <p className="text-center mt-10 block">No investment opportunities on this chain yet.</p>
          )}
        </>
      )}
    </article>
  );
};
