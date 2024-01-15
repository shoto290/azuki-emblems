import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Shonen: Emblem = {
  id: EmblemId.SHONEN,
  name: "Shonen",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/shonen-emblem.webp",
  points: [
    {
      description: "Own one Elemental of a Kid subtype",
      value: 100,
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Subtype",
          value: "Kid",
        },
      ],
    });
  },
};
