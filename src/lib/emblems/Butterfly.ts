import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Butterfly: Emblem = {
  id: EmblemId.BUTTERFLY,
  name: "Butterfly",
  contracts: [Collection.AZUKI],
  icon: "/images/butterfly-emblem.webp",
  points: [
    {
      description: "Own one Azuki with the Butterfly Trait",
      value: 900,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Butterfly",
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
          value: "Butterfly",
        },
      ],
    });
  },
};
