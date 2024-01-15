import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Frog: Emblem = {
  id: EmblemId.FROG,
  name: "Frog",
  contracts: [Collection.AZUKI],
  icon: "/images/frog-emblem.webp",
  points: [
    {
      description: "1 Frog trait",
      value: 100,
    },
    {
      description: "2 Frog trait",
      value: 400,
    },
    {
      description: "3 Frog trait",
      value: 1000,
    },
    {
      description: "4 Frog trait",
      value: 12000,
    },
  ],
  getTokens: async () => {
    const tokens = [
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Clothing",
            value: "Golden Frog Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Frog Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Frog Yukata",
          },
          {
            trait_type: "Clothing",
            value: "Frog Hoodie",
          },
          {
            trait_type: "Clothing",
            value: "Frog Kimono",
          },
          {
            trait_type: "Clothing",
            value: "Frog T-Shirt",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Ear",
            value: "Frog",
          },
        ],
        limit: 35,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Headgear",
            value: "Frog Beanie",
          },
          {
            trait_type: "Headgear",
            value: "Frog Mask",
          },
          {
            trait_type: "Headgear",
            value: "Frog Baseball Cap",
          },
          {
            trait_type: "Headgear",
            value: "Frog Headband",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Neck",
            value: "Frog Headphones",
          },
        ],
        limit: 52,
      })),
    ];

    return sort(tokens);
  },
};
