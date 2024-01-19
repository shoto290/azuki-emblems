import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

export const Butterfly: Emblem = {
  id: EmblemId.BUTTERFLY,
  name: "Butterfly",
  contracts: [Collection.AZUKI],
  icon: "/images/butterfly-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Own one Azuki with the Butterfly Trait",
      value: 900,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Butterfly",
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
          value: "Butterfly",
        },
      ],
    });
  },
};
