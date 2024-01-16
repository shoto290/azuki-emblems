import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Duality: Emblem = {
  id: EmblemId.DUALITY,
  name: "Duality",
  contracts: [Collection.AZUKI],
  icon: "/images/duality-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Own one Azuki of a Red or Blue Type",
      value: 250,
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
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
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
