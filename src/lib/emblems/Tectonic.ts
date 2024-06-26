import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

export const Tectonic: Emblem = {
  id: EmblemId.TECTONIC,
  name: "Tectonic",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/tectonic-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental with a Earth unique special trait",
      value: 300,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Growth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Rock Storm",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Sand Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Leaves",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Domain",
              value: "Earth",
            },
            {
              trait_type: "Special",
              value: "Butterflies",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async (params: GetTokensParams) => {
    return searchTokens({
      ...params,
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Domain",
          value: "Earth",
        },
        {
          trait_type: "Special",
          value: "Butterflies",
        },
        {
          trait_type: "Special",
          value: "Growth",
        },
        {
          trait_type: "Special",
          value: "Rock Storm",
        },
        {
          trait_type: "Special",
          value: "Sand Vortex",
        },
        {
          trait_type: "Special",
          value: "Leaves",
        },
      ],
    });
  },
};
