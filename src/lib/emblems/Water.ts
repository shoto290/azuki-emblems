import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Water: Emblem = {
  id: EmblemId.WATER,
  name: "Water",
  contracts: [Collection.AZUKI],
  icon: "/images/water-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Water Orb Offhand",
      value: 700,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Water Orb",
            },
          ],
        },
      ],
    },
    {
      description: "Water Special",
      value: 1500,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Water",
            },
          ],
        },
      ],
    },
    {
      description: "Water Hait",
      value: 3000,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Water",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const offhands = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Water Orb",
        },
      ],
      limit: 61,
    });
    const specials = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Water",
        },
      ],
      limit: 49,
    });
    const hairs = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Hair",
          value: "Water",
        },
      ],
      limit: 21,
    });

    return {
      tokens: sort([...offhands.tokens, ...specials.tokens, ...hairs.tokens]),
    };
  },
};
