import { Point } from "@/lib/emblems/types";
import { Market, Token } from "@/lib/services/token/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { AlertCircleIcon } from "lucide-react";
import TokenScoreBadge from "./TokenScoreBadge";
import { EmblemType } from "@/lib/emblems/enums";
import { TableCell, TableRow } from "@/lib/ui/components/ui/table";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn, formatAddress } from "@/lib/utils";
import { getValidPoints } from "@/lib/services/points/getValidPoints";
import { Badge } from "@/lib/ui/components/ui/badge";
import { BuyNowButton } from "./BuyNowButton";
import { TokenPointsPerEth } from "./TokenPointsPerEth";
import TokenPointsBadge from "./TokenPointsBadge";

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

  function openTokenPage() {
    window.open(
      market.floorAsk.source?.url ||
        `https://opensea.io/assets/ethereum/${token.contract}/${token.tokenId}`
    );
  }

  return (
    <TableRow className="hover:cursor-pointer">
      <TableCell
        onClick={openTokenPage}
        className="flex gap-4 items-center font-medium"
      >
        <TooltipProvider delayDuration={500} disableHoverableContent={true}>
          <Tooltip>
            <TooltipTrigger>
              <img
                className="rounded-md"
                src={token.image}
                alt={token.name}
                width={50}
                height={50}
              />
            </TooltipTrigger>
            <TooltipContent className="p-0">
              <img
                className="rounded-md"
                src={token.image}
                alt={token.name}
                width={260}
                height={260}
              />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {!isMobile && <p className="whitespace-nowrap">{token.name}</p>}
        {token.isFlagged && (
          <TooltipProvider delayDuration={0} disableHoverableContent={true}>
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
      <TableCell onClick={openTokenPage} className="text-center">
        <TokenPointsPerEth market={market} total={total} />
      </TableCell>
      <TableCell onClick={openTokenPage}>
        {market.floorAsk.price && <BuyNowButton market={market} />}
      </TableCell>
      <TableCell onClick={openTokenPage} className="text-center">
        <TokenPointsBadge
          token={token}
          points={points}
          emblemsType={emblemsType}
        />
      </TableCell>
      <TableCell onClick={openTokenPage} className="text-center">
        <TokenScoreBadge
          token={token}
          points={points}
          emblemsType={emblemsType}
        />
      </TableCell>
      {!isMobile && (
        <TableCell className="text-right">
          <a
            className="hover:underline"
            target="_blank"
            href={`https://www.azuki.com/collector/${token.owner}`}
          >
            {formatAddress(token.owner)}
          </a>
        </TableCell>
      )}
    </TableRow>
  );
}
