import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Lightning: Emblem = {
  id: EmblemId.LIGHTNING,
  name: "Lightning",
  contracts: [Collection.AZUKI],
  icon: "/images/lightning-emblem.webp",
  getTokens: async () => {
    const tokens = [
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Eyes",
            value: "Lightning",
          },
        ],
        limit: 46,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Offhand",
            value: "Lightning Orb",
          },
        ],
        limit: 69,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Special",
            value: "Lightning",
          },
        ],
        limit: 48,
      })),
    ];

    return sort(tokens);
  },
};
