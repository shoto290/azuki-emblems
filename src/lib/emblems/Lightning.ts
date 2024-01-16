import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Lightning: Emblem = {
  id: EmblemId.LIGHTNING,
  name: "Lightning",
  contracts: [Collection.AZUKI],
  icon: "/images/lightning-emblem.webp",
  type: EmblemType.AZUKI,
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
    const eyes = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Eyes",
          value: "Lightning",
        },
      ],
      limit: 46,
    });
    const offhands = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Lightning Orb",
        },
      ],
      limit: 69,
    });
    const specials = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Lightning",
        },
      ],
      limit: 48,
    });

    return {
      tokens: sort([...eyes.tokens, ...offhands.tokens, ...specials.tokens]),
    };
  },
};
