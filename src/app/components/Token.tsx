import { Point } from "@/lib/emblems/types";
import { Market, Token } from "@/lib/services/token/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { motion } from "framer-motion";
import { AlertCircleIcon } from "lucide-react";
import TokenPointsBadge from "./TokenPointsBadge";
import { EmblemType } from "@/lib/emblems/enums";
import { BuyNowButton } from "./BuyNowButton";

interface TokenProps {
  token: Token;
  market: Market;
  points: Point[];
  emblemsType: EmblemType;
}

export default function Token({
  token,
  market,
  points,
  emblemsType,
}: TokenProps) {
  return (
    <div
      onClick={() => {
        window.open(
          market.floorAsk.source?.url ||
            `https://opensea.io/assets/ethereum/${token.contract}/${token.tokenId}`
        );
      }}
      className="w-full flex gap-2 flex-col items-center p-2 hover:cursor-pointer"
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
        <img
          className="rounded-md"
          src={token.image}
          alt={token.name}
          width={800}
          height={800}
        />
      </motion.div>
      <div className="w-full gap-0 flex flex-col items-center">
        <p className="font-bold flex gap-1 items-center">
          {token.name}
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
        {market.floorAsk.price && <BuyNowButton market={market} />}
      </div>
    </div>
  );
}
