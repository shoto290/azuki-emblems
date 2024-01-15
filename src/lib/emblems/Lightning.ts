import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Lightning: Emblem = {
  id: EmblemId.LIGHTNING,
  name: "Lightning",
  contracts: [Collection.AZUKI],
  icon: "/images/lightning-emblem.webp",
  points: [
    {
      description: "Lightning Eyes",
      value: 700,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Eyes",
              value: "Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Lightning Orb Offhand",
      value: 700,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Lightning Orb",
            },
          ],
        },
      ],
    },
    {
      description: "Lightning Special",
      value: 1500,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning",
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
            value: "Lightning",
          },
        ],
        limit: 46,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Offhand",
            value: "Lightning Orb",
          },
        ],
        limit: 69,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Special",
            value: "Lightning",
          },
        ],
        limit: 48,
      })),
    ];

    return sort(tokens);
  },
};
