import { Market, Token } from "@/types";
import { motion } from "framer-motion";
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
      <Image
        className="rounded-md"
        src={token.image}
        alt={token.name}
        width={800}
        height={800}
      />
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
