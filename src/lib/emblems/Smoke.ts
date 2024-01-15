import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Smoke: Emblem = {
  id: EmblemId.SMOKE,
  name: "Smoke",
  contracts: [Collection.AZUKI],
  icon: "/images/smoke-emblem.webp",
  points: [
    {
      description: "Own one Azuki with the Smoke Trait",
      value: 900,
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Smoke",
        },
      ],
    });
  },
};
