import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Elemental: Emblem = {
  id: EmblemId.ELEMENTAL,
  name: "Elemental",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/elemental-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental",
      value: 100,
      infinite: true,
      conditions: [],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.ELEMENTAL],
    });
  },
};
