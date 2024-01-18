import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const BeanzKigu: Emblem = {
  id: EmblemId.BEANZ_KIGU,
  name: "Beanz Kigu",
  contracts: [Collection.BEANZ],
  icon: "/images/beanz-kigu-emblem.webp",
  type: EmblemType.BEANZ,
  points: [
    {
      description: "Standard Kigurumi clothing",
      value: 67,
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
    {
      description: "Golden Kigurumi clothing",
      value: 335,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Cat Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Sloth Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Red Panda Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Frog Kigurumi",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Clothing",
          value: "Golden Cat Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Golden Sloth Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Golden Red Panda Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Golden Frog Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Cat Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Sloth Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Red Panda Kigurumi",
        },
        {
          trait_type: "Clothing",
          value: "Frog Kigurumi",
        },
      ],
    });
  },
};
