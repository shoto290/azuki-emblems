import { Point } from "@/lib/emblems/types";
import { Market, Token } from "@/lib/services/token/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { AlertCircleIcon } from "lucide-react";
import TokenPointsBadge from "./TokenPointsBadge";
import { EmblemType } from "@/lib/emblems/enums";
import { TableCell, TableRow } from "@/lib/ui/components/ui/table";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn, formatAddress } from "@/lib/utils";
import { getValidPoints } from "@/lib/services/points/getValidPoints";
import { Badge } from "@/lib/ui/components/ui/badge";
import { BuyNowButton } from "./BuyNowButton";

interface TokenProps {
  token: Token;
  market: Market;
  points: Point[];
  emblemsType: EmblemType;
}

export default function RowToken({
  token,
  market,
  points,
  emblemsType,
}: TokenProps) {
  const { isMobile } = useBreakpoints();
  const validPoints = getValidPoints(token, emblemsType);
  const total = validPoints.reduce((acc, point) => acc + point.value, 0);

  return (
    <TableRow
      className="hover:cursor-pointer"
      onClick={() => {
        window.open(
          market.floorAsk.source?.url ||
            `https://opensea.io/assets/ethereum/${token.contract}/${token.tokenId}`
        );
      }}
    >
      <TableCell className="flex gap-4 items-center font-medium">
        <img
          className="rounded-md"
          src={token.image}
          alt={token.name}
          width={50}
          height={50}
        />
        {!isMobile && <p className="whitespace-nowrap">{token.name}</p>}
        {token.isFlagged && (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <AlertCircleIcon className="bg-red-500 h-4 w-4 rounded-full" />
              </TooltipTrigger>
              <TooltipContent>
                <p>This item can&apos;t be sold on Opensea</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </TableCell>
      <TableCell className="text-center">
        <Badge>
          {market.floorAsk.price?.amount.decimal
            ? Math.floor(total / market.floorAsk.price?.amount.decimal)
            : "Not listed"}
        </Badge>
      </TableCell>
      <TableCell>
        {market.floorAsk.price && <BuyNowButton market={market} />}
      </TableCell>
      <TableCell className="text-center">
        <TokenPointsBadge
          token={token}
          points={points}
          emblemsType={emblemsType}
        />
      </TableCell>
      {!isMobile && (
        <TableCell className="text-right">
          {formatAddress(token.owner)}
        </TableCell>
      )}
    </TableRow>
  );
}
