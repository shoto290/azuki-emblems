import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Azuki: Emblem = {
  id: EmblemId.AZUKI,
  name: "Azuki",
  contracts: [Collection.AZUKI],
  icon: "/images/azuki-emblem.webp",
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.AZUKI],
    });
  },
};
