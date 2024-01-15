import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Water: Emblem = {
  id: EmblemId.WATER,
  name: "Water",
  contracts: [Collection.AZUKI],
  icon: "/images/water-emblem.webp",
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
    const tokens = [
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Offhand",
            value: "Water Orb",
          },
        ],
        limit: 61,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Special",
            value: "Water",
          },
        ],
        limit: 49,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Hair",
            value: "Water",
          },
        ],
        limit: 21,
      })),
    ];

    return sort(tokens);
  },
};
