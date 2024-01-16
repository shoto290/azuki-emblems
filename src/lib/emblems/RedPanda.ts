import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const RedPanda: Emblem = {
  id: EmblemId.RED_PANDA,
  name: "Red Panda",
  contracts: [Collection.AZUKI],
  icon: "/images/red-panda-emblem.webp",
  points: [
    {
      description: "Red Panda trait",
      value: 100,
      multiples: [400, 1000, 12000],
      conditions: [
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
              value: "Red Panda Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Red Panda Yukata",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Red Panda Hoodie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Red Panda Kimono",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Red Panda T-Shirt",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Ear",
              value: "Red Panda",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Red Panda Beanie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Red Panda Mask",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Red Panda Baseball Cap",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Red Panda Headband",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Neck",
              value: "Red Panda Headphones",
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
            value: "Golden Red Panda Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Red Panda Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Red Panda Yukata",
          },
          {
            trait_type: "Clothing",
            value: "Red Panda Hoodie",
          },
          {
            trait_type: "Clothing",
            value: "Red Panda Kimono",
          },
          {
            trait_type: "Clothing",
            value: "Red Panda T-Shirt",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Ear",
            value: "Red Panda",
          },
        ],
        limit: 35,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Headgear",
            value: "Red Panda Beanie",
          },
          {
            trait_type: "Headgear",
            value: "Red Panda Mask",
          },
          {
            trait_type: "Headgear",
            value: "Red Panda Baseball Cap",
          },
          {
            trait_type: "Headgear",
            value: "Red Panda Headband",
          },
        ],
        limit: 100,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Neck",
            value: "Red Panda Headphones",
          },
        ],
        limit: 52,
      })),
    ];

    return sort(tokens);
  },
};
