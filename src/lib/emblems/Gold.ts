import searchTokens from "../services/token/searchTokens";
import { Nft } from "../services/token/types";
import { Collection, EmblemId } from "./enums";
import { Emblem } from "./types";

export const Gold: Emblem = {
  id: EmblemId.GOLD,
  name: "Gold",
  contracts: [Collection.AZUKI],
  icon: "/images/gold-emblem.webp",
  getTokens: async () => {
    const tokens = [
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Clothing",
            value: "Golden Cat Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Golden Sloth Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Golden Red Panda Kigurumi",
          },
          {
            trait_type: "Clothing",
            value: "Golden Frog Kigurumi",
          },
        ],
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Neck",
            value: "Golden Headphones",
          },
        ],
        limit: 35,
      })),
      ...(await searchTokens({
        contracts: [Collection.AZUKI],
        attributes: [
          {
            trait_type: "Offhand",
            value: "Golden Zanbato",
          },
          {
            trait_type: "Offhand",
            value: "Golden Katana",
          },
          {
            trait_type: "Offhand",
            value: "Golden Sheathed Katana",
          },
          {
            trait_type: "Offhand",
            value: "Golden Monkey King Staff",
          },
          {
            trait_type: "Offhand",
            value: "Golden Bat",
          },
          {
            trait_type: "Offhand",
            value: "Golden Ticket",
          },
          {
            trait_type: "Offhand",
            value: "Golden Umbrella",
          },
          {
            trait_type: "Offhand",
            value: "Golden Fishing Rod",
          },
          {
            trait_type: "Offhand",
            value: "Golden Shinai",
          },
          {
            trait_type: "Offhand",
            value: "Golden Shuriken",
          },
          {
            trait_type: "Offhand",
            value: "Golden Hook Sword",
          },
          {
            trait_type: "Offhand",
            value: "Golden Monk Staff",
          },
          {
            trait_type: "Offhand",
            value: "Golden Skateboard",
          },
          {
            trait_type: "Offhand",
            value: "Golden Fan",
          },
          {
            trait_type: "Offhand",
            value: "Golden Floorsweeper",
          },
          {
            trait_type: "Offhand",
            value: "Golden Guitar",
          },
          {
            trait_type: "Offhand",
            value: "Golden Kanabo",
          },
          {
            trait_type: "Offhand",
            value: "Golden Boombox",
          },
          {
            trait_type: "Offhand",
            value: "Golden Bean",
          },
        ],
        limit: 100,
      })),
    ];

    return sort(tokens);
  },
};

function sort(tokens: Nft[]): Nft[] {
  return tokens.sort((a, b) => {
    if (a.market.floorAsk.price?.amount.decimal === undefined) return 1;
    if (b.market.floorAsk.price?.amount.decimal === undefined) return -1;

    if (
      a.market.floorAsk.price?.amount.decimal <
      b.market.floorAsk.price?.amount.decimal
    )
      return -1;
    if (
      a.market.floorAsk.price?.amount.decimal >
      b.market.floorAsk.price?.amount.decimal
    )
      return 1;

    return 0;
  });
}
