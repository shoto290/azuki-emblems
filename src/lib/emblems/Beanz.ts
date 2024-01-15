import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Beanz: Emblem = {
  id: EmblemId.BEANZ,
  name: "Beanz",
  contracts: [Collection.BEANZ],
  icon: "/images/beanz-emblem.webp",
  points: [
    {
      description: "Own one Beanz",
      value: 67,
      infinite: true,
      conditions: [],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.BEANZ],
    });
  },
};
