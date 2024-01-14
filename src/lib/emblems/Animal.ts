import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Animal: Emblem = {
  id: EmblemId.ANIMAL,
  name: "Animal",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/animal-emblem.webp",
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
