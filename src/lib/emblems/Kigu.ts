import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Kigu: Emblem = {
  id: EmblemId.KIGU,
  name: "Kigu",
  contracts: [Collection.AZUKI],
  icon: "/images/kigu-emblem.webp",
  points: [
    {
      description: "Standard Kigurumi clothing",
      value: 1000,
    },
    {
      description: "golden Kigurumi clothing",
      value: 5000,
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
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
