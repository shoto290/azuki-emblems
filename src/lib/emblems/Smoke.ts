import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

export const Smoke: Emblem = {
  id: EmblemId.SMOKE,
  name: "Smoke",
  contracts: [Collection.AZUKI],
  icon: "/images/smoke-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Own one Azuki with the Smoke Trait",
      value: 900,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Smoke",
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
          value: "Smoke",
        },
      ],
    });
  },
};
