import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Shonen: Emblem = {
  id: EmblemId.SHONEN,
  name: "Shonen",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/shonen-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental of a Kid subtype",
      value: 100,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Subtype",
              value: "Kid",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (continuation?: string) => {
    return searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Subtype",
          value: "Kid",
        },
      ],
      continuation,
    });
  },
};
