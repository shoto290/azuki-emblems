import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Unknown: Emblem = {
  id: EmblemId["???"],
  name: "???",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/unknown-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "???",
      value: 2500,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "???",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental #17319",
      value: 1250,
      conditions: [
        {
          tokenId: 17319,
        },
      ],
    },
    {
      description: "Dark Energy Special",
      value: 1250,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Dark Energy",
            },
          ],
        },
      ],
    },
    {
      description: "Black Hold Offhand",
      value: 500,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Black Hole",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (continuation?: string) => {
    const simple = await searchTokens({
      tokens: [`${Collection.ELEMENTAL}:17319`],
      limit: 1,
    });
    const unknown = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Type",
          value: "???",
        },
      ],
      limit: 100,
    });
    const special = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Special",
          value: "Dark Energy",
        },
      ],
    });
    const offhands = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Black Hole",
        },
      ],
    });

    return {
      tokens: sort([
        ...unknown.tokens,
        ...simple.tokens,
        ...special.tokens,
        ...offhands.tokens,
      ]),
    };
  },
};
