import { Nft } from "../services/token/types";

export function sort(tokens: Nft[]): Nft[] {
  return tokens.sort((a, b) => {
    if (a.market.floorAsk.price?.amount.decimal === undefined) return 1;
    if (b.market.floorAsk.price?.amount.decimal === undefined) return -1;

    if (
      a.market.floorAsk.price?.amount.decimal <
      b.market.floorAsk.price?.amount.decimal
    )
      return -1;
    if (
      a.market.floorAsk.price?.amount.decimal >
      b.market.floorAsk.price?.amount.decimal
    )
      return 1;

    return 0;
  });
}
