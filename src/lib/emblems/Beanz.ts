import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Beanz: Emblem = {
  id: EmblemId.BEANZ,
  name: "Beanz",
  contracts: [Collection.BEANZ],
  icon: "/images/beanz-emblem.webp",
  type: EmblemType.BEANZ,
  points: [
    {
      description: "Own one Beanz",
      value: 67,
      infinite: true,
      conditions: [],
    },
  ],
  getTokens: async (continuation?: string) => {
    return searchTokens({
      contracts: [Collection.BEANZ],
      continuation,
    });
  },
};
