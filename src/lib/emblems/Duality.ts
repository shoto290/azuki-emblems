import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Duality: Emblem = {
  id: EmblemId.DUALITY,
  name: "Duality",
  contracts: [Collection.AZUKI],
  icon: "/images/duality-emblem.webp",
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Type",
          value: "Red",
        },
        {
          trait_type: "Type",
          value: "Blue",
        },
      ],
    });
  },
};
