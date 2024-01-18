import { Point } from "@/lib/emblems/types";
import { Market, Token } from "@/lib/services/token/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { motion } from "framer-motion";
import { AlertCircleIcon, Table } from "lucide-react";
import TokenPointsBadge from "./TokenPointsBadge";
import { EmblemType } from "@/lib/emblems/enums";
import { TableCell, TableRow } from "@/lib/ui/components/ui/table";
import { use } from "react";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn } from "@/lib/utils";

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

  return (
    <TableRow
      className="w-full hover:cursor-pointer"
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
        <p className="whitespace-nowrap">
          {isMobile ? `#${token.tokenId}` : token.name}
        </p>
      </TableCell>
      <TableCell>
        <TokenPointsBadge
          token={token}
          points={points}
          emblemsType={emblemsType}
        />
      </TableCell>
      <TableCell>
        {market.floorAsk.price && (
          <span
            className={cn("flex gap-1 items-center", isMobile && "justify-end")}
          >
            <img className="h-[16px]" src={market.floorAsk.source.icon} />
            <p>Ξ{market.floorAsk.price.amount.decimal}</p>
            <p className="text-white/50">
              (${Math.round(market.floorAsk.price.amount.usd)})
            </p>
          </span>
        )}
      </TableCell>
      {!isMobile && <TableCell className="text-right">{token.owner}</TableCell>}
    </TableRow>
  );

  return (
    <div
      onClick={() => {
        window.open(
          market.floorAsk.source?.url ||
            `https://opensea.io/assets/ethereum/${token.contract}/${token.tokenId}`
        );
      }}
      className="w-full flex gap-2 items-center justify-between p-2 hover:cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{
          type: "easeInOut",
          duration: 0.1,
        }}
        className="flex w-full justify-end"
      >
        <div className="absolute mt-1 mr-2">
          <TokenPointsBadge
            token={token}
            points={points}
            emblemsType={emblemsType}
          />
        </div>
      </motion.div>
      <div className="w-full gap-0 flex flex-col items-center">
        <p className="font-bold flex gap-1 items-center">
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
        </p>
      </div>
    </div>
  );
}
