import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Spirit: Emblem = {
  id: EmblemId.SPIRIT,
  name: "Spirit",
  contracts: [Collection.AZUKI],
  icon: "/images/spirit-emblem.webp",
  points: [
    {
      description: "Spirit Type",
      value: 15000,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Spirit",
            },
          ],
        },
      ],
    },
    {
      description: "Azuki #1879",
      value: 7500,
      conditions: [
        {
          tokenId: 1879,
        },
      ],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Type",
          value: "Spirit",
        },
      ],
    });
  },
};
