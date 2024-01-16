import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Sloth: Emblem = {
  id: EmblemId.SLOTH,
  name: "Sloth",
  contracts: [Collection.AZUKI],
  icon: "/images/sloth-emblem.webp",
  points: [
    {
      description: "Sloth trait",
      value: 100,
      multiples: [400, 1000, 12000],
      conditions: [
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
              value: "Sloth Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Sloth Yukata",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Sloth Hoodie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Sloth Kimono",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Sloth T-Shirt",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Ear",
              value: "Sloth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Sloth Beanie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Sloth Mask",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Sloth Baseball Cap",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Sloth Headband",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Neck",
              value: "Sloth Headphones",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const tokens = [
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Clothing",
            value: "Golden Sloth Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Sloth Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Sloth Yukata",
          },
          {
            trait_type: "Clothing",
            value: "Sloth Hoodie",
          },
          {
            trait_type: "Clothing",
            value: "Sloth Kimono",
          },
          {
            trait_type: "Clothing",
            value: "Sloth T-Shirt",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Ear",
            value: "Sloth",
          },
        ],
        limit: 35,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Headgear",
            value: "Sloth Beanie",
          },
          {
            trait_type: "Headgear",
            value: "Sloth Mask",
          },
          {
            trait_type: "Headgear",
            value: "Sloth Baseball Cap",
          },
          {
            trait_type: "Headgear",
            value: "Sloth Headband",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Neck",
            value: "Sloth Headphones",
          },
        ],
        limit: 52,
      })),
    ];

    return sort(tokens);
  },
};
