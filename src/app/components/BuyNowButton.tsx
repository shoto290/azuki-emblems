import { Market } from "@/lib/services/token/types";
import { roundNumber, upgradeNumberString } from "@/lib/utils";

interface BuyNowButtonProps {
  market: Market;
}

export function BuyNowButton({ market }: BuyNowButtonProps) {
  return (
    <span className="border w-fit px-2 py-1 rounded-xl bg-primary/10 flex gap-1 items-center">
      <img className="h-[16px]" src={market.floorAsk.source.icon} />
      <p>Ξ{roundNumber(market.floorAsk.price.amount.decimal, 3)}</p>
      <p className="text-white/50">
        (${upgradeNumberString(market.floorAsk.price.amount.usd)})
      </p>
    </span>
  );
}
