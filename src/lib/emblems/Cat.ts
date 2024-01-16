import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Cat: Emblem = {
  id: EmblemId.CAT,
  name: "Cat",
  contracts: [Collection.AZUKI],
  icon: "/images/cat-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Cat trait",
      value: 100,
      multiples: [400, 1000, 12000],
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
              value: "Cat Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cat Yukata",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cat Hoodie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cat Kimono",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cat T-Shirt",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Ear",
              value: "Cat",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Cat Beanie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Cat Mask",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Cat Baseball Cap",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Cat Headband",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Neck",
              value: "Cat Headphones",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const clothingTokens = await searchTokens({
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
    });
    const earTokens = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Ear",
          value: "Cat",
        },
      ],
      limit: 35,
    });
    const headgearTokens = await searchTokens({
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
    });
    const neckTokens = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Neck",
          value: "Cat Headphones",
        },
      ],
      limit: 52,
    });

    return {
      tokens: sort([
        ...clothingTokens.tokens,
        ...earTokens.tokens,
        ...headgearTokens.tokens,
        ...neckTokens.tokens,
      ]),
    };
  },
};
