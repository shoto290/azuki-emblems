import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const FoxFire: Emblem = {
  id: EmblemId.FOX_FIRE,
  name: "Fox Fire",
  contracts: [Collection.AZUKI],
  icon: "/images/fox-fire-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Own one Azuki with the Fox Fire Trait",
      value: 900,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fox Fire",
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
          value: "Fox Fire",
        },
      ],
    });
  },
};
