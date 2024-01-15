import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Fire: Emblem = {
  id: EmblemId.FIRE,
  name: "Fire",
  contracts: [Collection.AZUKI],
  icon: "/images/fire-emblem.webp",
  points: [
    {
      description: "Fire Eyes",
      value: 700,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Eyes",
              value: "Fire",
            },
          ],
        },
      ],
    },
    {
      description: "Fireball Offhand",
      value: 700,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Fireball",
            },
          ],
        },
      ],
    },
    {
      description: "Fire Special",
      value: 1500,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fire",
            },
          ],
        },
      ],
    },
    {
      description: "Fire Hait",
      value: 3000,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Fire",
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
            trait_type: "Eyes",
            value: "Fire",
          },
        ],
        limit: 57,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Offhand",
            value: "Fireball",
          },
        ],
        limit: 67,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Special",
            value: "Fire",
          },
        ],
        limit: 58,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Hair",
            value: "Fire",
          },
        ],
        limit: 22,
      })),
    ];

    return sort(tokens);
  },
};
