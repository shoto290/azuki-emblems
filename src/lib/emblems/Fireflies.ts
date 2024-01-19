import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

export const Fireflies: Emblem = {
  id: EmblemId.FIREFLIES,
  name: "Fireflies",
  contracts: [Collection.AZUKI],
  icon: "/images/fireflies-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Own one Azuki with the Fireflies Trait",
      value: 900,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fireflies",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (params: GetTokensParams) => {
    return searchTokens({
      ...params,
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
