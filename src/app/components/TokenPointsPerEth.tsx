import { Market } from "@/lib/services/token/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";

interface TokenPointsPerEthProps {
  market: Market;
  total: number;
}

export function TokenPointsPerEth({ market, total }: TokenPointsPerEthProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Badge>
            {market.floorAsk.price?.amount.decimal
              ? Math.floor(total / market.floorAsk.price?.amount.decimal)
              : "Not listed"}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="text-start flex flex-col gap-3">
          Points/Eth
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
