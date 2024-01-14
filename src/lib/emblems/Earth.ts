import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Earth: Emblem = {
  id: EmblemId.EARTH,
  name: "Earth",
  contracts: [Collection.AZUKI],
  icon: "/images/earth-emblem.webp",
  getTokens: async () => {
    const tokens = [
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Offhand",
            value: "Earth",
          },
        ],
        limit: 58,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Special",
            value: "Earth",
          },
        ],
        limit: 53,
      })),
    ];

    return sort(tokens);
  },
};