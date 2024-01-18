import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const SpiritBeanz: Emblem = {
  id: EmblemId.SPIRIT_BEANZ,
  name: "Spirit Beanz",
  contracts: [Collection.BEANZ],
  icon: "/images/spirit-beanz-emblem.webp",
  type: EmblemType.BEANZ,
  points: [
    {
      description: "Own 1 BEANZ with Spirit Type",
      value: 402,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Spirit Bean",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (continuation?: string) => {
    return searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Type",
          value: "Spirit Bean",
        },
      ],
      continuation,
    });
  },
};
