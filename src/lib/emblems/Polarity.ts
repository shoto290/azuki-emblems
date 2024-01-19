import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

export const Polarity: Emblem = {
  id: EmblemId.POLARITY,
  name: "Polarity",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/polarity-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental of a Red or Blue Type",
      value: 25,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Red",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Blue",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (params: GetTokensParams) => {
    return searchTokens({
      ...params,
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Type",
          value: "Red",
        },
        {
          trait_type: "Type",
          value: "Blue",
        },
      ],
    });
  },
};
