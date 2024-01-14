import { Market, Token } from "@/lib/services/token/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { motion } from "framer-motion";
import { AlertCircleIcon } from "lucide-react";
import Image from "next/image";

interface TokenProps {
  token: Token;
  market: Market;
}

export default function Token({ token, market }: TokenProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => {
        window.open(market.floorAsk.source.url);
      }}
      className="w-full flex gap-2 flex-col items-center p-2 hover:cursor-pointer"
    >
      <div className="flex justify-end">
        {token.isFlagged && (
          <div className="absolute m-2">
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <AlertCircleIcon className="bg-red-500 rounded-full" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>This item can&apos;t be sold on Opensea</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        <Image
          className="rounded-md"
          src={token.image}
          alt={token.name}
          width={800}
          height={800}
        />
      </div>
      <div className="w-full gap-0 flex flex-col items-center">
        <p className="font-bold">{token.name}</p>
        <span className="flex gap-1 items-center">
          <img className="h-[16px]" src={market.floorAsk.source.icon} />
          <p>Ξ{market.floorAsk.price.amount.decimal}</p>
          <p className="text-white/50">
            (${Math.round(market.floorAsk.price.amount.usd)})
          </p>
        </span>
      </div>
    </motion.div>
  );
}
