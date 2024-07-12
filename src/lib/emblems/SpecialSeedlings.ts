import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const SpecialSeedlings: Emblem = {
  id: EmblemId.SPECIAL_SEEDLINGS,
  name: "Special Seedlings",
  contracts: [Collection.BEANZ],
  icon: "/images/special-seedlings-emblem.webp",
  type: EmblemType.BEANZ,
  points: [
    {
      description: "Flying Cloud Special",
      value: 101,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Flying Cloud",
            },
          ],
        },
      ],
    },
    {
      description: "Raijin Drums Special",
      value: 101,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Raijin Drums",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Raijin Drums with Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Other Special",
      value: 34,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Butterfly",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Earth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fire",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Water",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Angel Wings",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Devil Wings",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fireflies",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Smoke",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Special",
          value: "Raijin Drums with Lightning",
        },
        {
          trait_type: "Special",
          value: "Raijin Drums",
        },
        {
          trait_type: "Special",
          value: "Flying Cloud",
        },
        {
          trait_type: "Special",
          value: "Butterfly",
        },
        {
          trait_type: "Special",
          value: "Earth",
        },
        {
          trait_type: "Special",
          value: "Lightning",
        },
        {
          trait_type: "Special",
          value: "Fire",
        },
        {
          trait_type: "Special",
          value: "Water",
        },
        {
          trait_type: "Special",
          value: "Angel Wings",
        },
        {
          trait_type: "Special",
          value: "Devil Wings",
        },
        {
          trait_type: "Special",
          value: "Fireflies",
        },
        {
          trait_type: "Special",
          value: "Smoke",
        },
      ],
    });
  },
};
