import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Spirit: Emblem = {
  id: EmblemId.SPIRIT,
  name: "Spirit",
  contracts: [Collection.AZUKI],
  icon: "/images/spirit-emblem.webp",
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
      attributes: [
        {
          trait_type: "Type",
          value: "Spirit",
        },
      ],
    });
  },
};
