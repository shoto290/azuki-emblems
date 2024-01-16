import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { Emblem } from "./types";

export const Animal: Emblem = {
  id: EmblemId.ANIMAL,
  name: "Animal",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/animal-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Own one Sloth, Red Panda, Cat, or Frog Elemental token",
      value: 350,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Subtype",
              value: "Sloth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Subtype",
              value: "Frog",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Subtype",
              value: "Red Panda",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Subtype",
              value: "Cat",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Subtype",
          value: "Sloth",
        },
        {
          trait_type: "Subtype",
          value: "Frog",
        },
        {
          trait_type: "Subtype",
          value: "Red Panda",
        },
        {
          trait_type: "Subtype",
          value: "Cat",
        },
      ],
    });
  },
};
