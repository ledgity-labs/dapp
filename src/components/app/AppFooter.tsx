"use client";
import { FC } from "react";
import clsx from "clsx";
// import { useDApp } from "@/hooks";
import { useBlockNumber } from "wagmi";

const AppFooter: FC = () => {
  const { data: _blockNumber } = useBlockNumber({
    // chainId: chain.id,
    watch: true,
  });
  return (
    <footer className={clsx("h-28")}>
      <div className="flex justify-center items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
        <div className="relative h-4 w-4 flex justify-center items-center ">
          <div className="absolute h-3 w-3 rounded-full bg-emerald-400 animate-ping duration-[1500ms]"></div>
          <div className="absolute h-3 w-3 rounded-full bg-emerald-400"></div>
        </div>
        <span className="text-fg font-bold">{_blockNumber?.toString()}</span>
      </div>
    </footer>
  );
};
export default AppFooter;
