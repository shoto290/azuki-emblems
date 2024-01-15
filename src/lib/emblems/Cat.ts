import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Cat: Emblem = {
  id: EmblemId.CAT,
  name: "Cat",
  contracts: [Collection.AZUKI],
  icon: "/images/cat-emblem.webp",
  points: [
    {
      description: "1 Cat trait",
      value: 100,
    },
    {
      description: "2 Cat trait",
      value: 400,
    },
    {
      description: "3 Cat trait",
      value: 1000,
    },
    {
      description: "4 Cat trait",
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
            value: "Golden Cat Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Cat Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Cat Yukata",
          },
          {
            trait_type: "Clothing",
            value: "Cat Hoodie",
          },
          {
            trait_type: "Clothing",
            value: "Cat Kimono",
          },
          {
            trait_type: "Clothing",
            value: "Cat T-Shirt",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Ear",
            value: "Cat",
          },
        ],
        limit: 35,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Headgear",
            value: "Cat Beanie",
          },
          {
            trait_type: "Headgear",
            value: "Cat Mask",
          },
          {
            trait_type: "Headgear",
            value: "Cat Baseball Cap",
          },
          {
            trait_type: "Headgear",
            value: "Cat Headband",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Neck",
            value: "Cat Headphones",
          },
        ],
        limit: 52,
      })),
    ];

    return sort(tokens);
  },
};
