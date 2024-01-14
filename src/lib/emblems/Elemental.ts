import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Elemental: Emblem = {
  id: EmblemId.ELEMENTAL,
  name: "Elemental",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/elemental-emblem.webp",
  getTokens: async () => {
    return searchTokens({
      contracts: [Collection.ELEMENTAL],
    });
  },
};
