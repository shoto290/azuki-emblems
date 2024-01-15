import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Fireflies: Emblem = {
  id: EmblemId.FIREFLIES,
  name: "Fireflies",
  contracts: [Collection.AZUKI],
  icon: "/images/fireflies-emblem.webp",
  points: [
    {
      description: "Own one Azuki with the Fireflies Trait",
      value: 900,
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Fireflies",
        },
      ],
    });
  },
};
