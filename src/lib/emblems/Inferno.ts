import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Inferno: Emblem = {
  id: EmblemId.INFERNO,
  name: "Inferno",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/inferno-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental with a Fire unique special trait",
      value: 300,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fire Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lava",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Smolder",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Embers",
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
          value: "Fire Vortex",
        },
        {
          trait_type: "Special",
          value: "Lava",
        },
        {
          trait_type: "Special",
          value: "Smolder",
        },
        {
          trait_type: "Special",
          value: "Embers",
        },
      ],
      continuation,
    });
  },
};
