import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Frog: Emblem = {
  id: EmblemId.FROG,
  name: "Frog",
  contracts: [Collection.AZUKI],
  icon: "/images/frog-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Frog trait",
      value: 100,
      multiples: [400, 1000, 12000],
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Frog Kigurumi",
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
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Frog Yukata",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Frog Hoodie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Frog Kimono",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Frog T-Shirt",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Ear",
              value: "Frog",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Frog Beanie",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Frog Mask",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Frog Baseball Cap",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Frog Headband",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Neck",
              value: "Frog Headphones",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const clothings = await searchTokens({
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
    });
    const ears = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Ear",
          value: "Frog",
        },
      ],
      limit: 35,
    });
    const headgears = await searchTokens({
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
    });
    const necks = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Neck",
          value: "Frog Headphones",
        },
      ],
      limit: 52,
    });

    return {
      tokens: sort([
        ...clothings.tokens,
        ...ears.tokens,
        ...headgears.tokens,
        ...necks.tokens,
      ]),
    };
  },
};
