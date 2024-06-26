import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Earth: Emblem = {
  id: EmblemId.EARTH,
  name: "Earth",
  contracts: [Collection.AZUKI],
  icon: "/images/earth-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Earth Offhand",
      value: 700,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Earth",
            },
          ],
        },
      ],
    },
    {
      description: "Earth Special",
      value: 1500,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Earth",
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
          value: "Earth",
        },
      ],
      limit: 58,
    });
    const specials = await searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Earth",
        },
      ],
      limit: 53,
    });

    return {
      tokens: sort([...offhands.tokens, ...specials.tokens]),
    };
  },
};
