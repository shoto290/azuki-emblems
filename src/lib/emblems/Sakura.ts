import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Sakura: Emblem = {
  id: EmblemId.SAKURA,
  name: "Sakura",
  contracts: [Collection.AZUKI],
  icon: "/images/sakura-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Own one Azuki with the Sakura Trait",
      value: 900,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Sakura",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Special",
          value: "Sakura",
        },
      ],
    });
  },
};
