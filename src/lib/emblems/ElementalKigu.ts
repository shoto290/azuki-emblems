import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const ElementalKigu: Emblem = {
  id: EmblemId.ELEMENTAL_KIGU,
  name: "Elemental Kigu",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/elemental-kigu-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental with  Kigurumi clothing",
      value: 100,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cat Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Sloth Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Red Panda Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Frog Kigurumi",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (continuation?: string) => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Clothing",
          value: "Sloth Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Frog Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Red Panda Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Cat Kigurumi",
        },
      ],
      continuation,
    });
  },
};
