import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem, GetTokensParams } from "./types";

export const Torrent: Emblem = {
  id: EmblemId.TORRENT,
  name: "Torrent",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/torrent-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Elemental with a Water unique special trait",
      value: 300,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Water Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Underwater",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Rain",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Bubble",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Blizzard",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Domain",
              value: "Water",
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
          value: "Water",
        },
        {
          trait_type: "Special",
          value: "Butterflies",
        },
        {
          trait_type: "Special",
          value: "Water Vortex",
        },
        {
          trait_type: "Special",
          value: "Underwater",
        },
        {
          trait_type: "Special",
          value: "Rain",
        },
        {
          trait_type: "Special",
          value: "Bubble",
        },
        {
          trait_type: "Special",
          value: "Blizzard",
        },
      ],
    });
  },
};
