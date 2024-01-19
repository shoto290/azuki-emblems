import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

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
  getTokens: async (params: GetTokensParams) => {
    return searchTokens({
      ...params,
      contracts: [Collection.BEANZ],
    });
  },
};
