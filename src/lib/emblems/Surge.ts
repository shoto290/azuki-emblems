import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Surge: Emblem = {
  id: EmblemId.SURGE,
  name: "Surge",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/surge-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental with a Lightning unique special trait",
      value: 300,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning Blast",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning Strike",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Stars",
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
          trait_type: "Special",
          value: "Lightning Blast",
        },
        {
          trait_type: "Special",
          value: "Lightning Vortex",
        },
        {
          trait_type: "Special",
          value: "Lightning Strike",
        },
        {
          trait_type: "Special",
          value: "Stars",
        },
      ],
      continuation,
    });
  },
};
