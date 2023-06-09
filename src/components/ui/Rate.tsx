import { FC } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { twMerge } from "tailwind-merge";
import { formatUnits, parseUnits } from "viem";
import * as d3 from "d3-format";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  value: number | undefined;
  tooltip?: boolean;
  prefix?: string;
  isUD3?: boolean;
}

function getFloatValue(value: number | undefined, isUD3: boolean) {
  if (!value) return 0;
  return isUD3 ? Number(formatUnits(BigInt(value), 3)) : value;
}

export function formatRate(value: number, isUD3: boolean = false) {
  const floatValue = getFloatValue(value, isUD3);

  let formattedRate = "";
  if (floatValue === 0) formattedRate = "0";
  else if (floatValue < 0.01) formattedRate = "<0.01";
  else if (floatValue < 1) formattedRate = floatValue.toFixed(2);
  else if (floatValue < 1000) formattedRate = floatValue.toFixed(1);
  else formattedRate = ">999";
  return formattedRate;
}

function longFormatRate(value: number, isUD3: boolean = false) {
  const floatValue = getFloatValue(value, isUD3);
  let longFormattedRate = "";
  if (floatValue === 0) longFormattedRate = "0";
  else if (floatValue < 0.00001) longFormattedRate = "<0.00001";
  if (floatValue < 1) longFormattedRate = d3.format(",.5f")(floatValue);
  if (floatValue < 1000) longFormattedRate = d3.format(",.4f")(floatValue);
  else longFormattedRate = d3.format(",.3f")(floatValue);
  return longFormattedRate;
}

export const Rate: FC<Props> = ({
  className,
  value,
  prefix = "",
  tooltip = true,
  isUD3 = true,
  ...props
}) => {
  const formattedValue = formatRate(value || 0, isUD3);

  if (!tooltip)
    return (
      <span className={className} {...props}>
        {prefix}
        {formattedValue}%
      </span>
    );
  else
    return (
      <Tooltip>
        <TooltipTrigger className={twMerge("cursor-help", className)}>
          {prefix}
          {formattedValue}%
        </TooltipTrigger>
        <TooltipContent className="font-heading font-bold">
          {prefix}
          {longFormatRate(value || 0, isUD3)}%
        </TooltipContent>
      </Tooltip>
    );
};
