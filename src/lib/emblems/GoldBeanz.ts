import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const GoldBeanz: Emblem = {
  id: EmblemId.GOLD_BEANZ,
  name: "Gold Beanz",
  contracts: [Collection.BEANZ],
  icon: "/images/gold-beanz-emblem.webp",
  type: EmblemType.BEANZ,
  points: [
    {
      description: "Gold Type",
      value: 201,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Golden Bean",
            },
          ],
        },
      ],
    },
    {
      description: "Gold Trait",
      value: 67,
      multiples: [268, 469, 603],
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Cat Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Sloth Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Red Panda Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Frog Kigurumi",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Golden Bead Bracelet",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Oversized Black T-shirt with Gold Chain",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Key",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Cigar",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Shuriken",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Floorsweeper",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Cocktail Umbrella",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Sake",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Stylus",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Dumbbell",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Poker Chip",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Boxing Glove",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Fan",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Shield",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Shinai",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Boombox",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Tech Deck",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Toothpick",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Magic Wand",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Monkey King Staff",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Bat",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Coin",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Q-tip",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Ledger",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Dart",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Hook Sword",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Paintbrush",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Axe",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Guitar Pick",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Blow Pop",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Spoon",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Round Fan",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Nunchuck",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Katana Sheathed",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Golden Katana",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Round Fan",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Dart",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Pencil",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Lipstick",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Guitar Pick",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Mahjong",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Boxing Glove",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Katana Sheath",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Q-tip",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Ledger",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Lollipop",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Fan",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Cards",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Banner",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Stylus",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Boombox",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Dumbbell",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Magic Wand",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Paintbrush",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Leaf",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Toothpick",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Basketball",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Spray Paint",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Cocktail Umbrella",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Sake",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Twig",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Cigar",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Lantern",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Coffee Cup",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Floorsweeper",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Monkey King Staff",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Guitar",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Fork",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Tech Deck",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Monk Staff",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Kanabo",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Axe",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Zanbato",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Shuriken",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Coin",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Glove",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Gold Bean",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const clothings = await searchTokens({
      contracts: [Collection.BEANZ],
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
        {
          trait_type: "Clothing",
          value: "Golden Bead Bracelet",
        },
        {
          trait_type: "Clothing",
          value: "Oversized Black T-shirt with Gold Chain",
        },
      ],
    });
    const hands = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Hand",
          value: "Golden Key",
        },
        {
          trait_type: "Hand",
          value: "Golden Cigar",
        },
        {
          trait_type: "Hand",
          value: "Golden Shuriken",
        },
        {
          trait_type: "Hand",
          value: "Golden Floorsweeper",
        },
        {
          trait_type: "Hand",
          value: "Golden Cocktail Umbrella",
        },
        {
          trait_type: "Hand",
          value: "Golden Sake",
        },
        {
          trait_type: "Hand",
          value: "Golden Stylus",
        },
        {
          trait_type: "Hand",
          value: "Golden Dumbbell",
        },
        {
          trait_type: "Hand",
          value: "Golden Poker Chip",
        },
        {
          trait_type: "Hand",
          value: "Golden Boxing Glove",
        },
        {
          trait_type: "Hand",
          value: "Golden Fan",
        },
        {
          trait_type: "Hand",
          value: "Golden Shield",
        },
        {
          trait_type: "Hand",
          value: "Golden Shinai",
        },
        {
          trait_type: "Hand",
          value: "Golden Boombox",
        },
        {
          trait_type: "Hand",
          value: "Golden Tech Deck",
        },
        {
          trait_type: "Hand",
          value: "Golden Toothpick",
        },
        {
          trait_type: "Hand",
          value: "Golden Magic Wand",
        },
        {
          trait_type: "Hand",
          value: "Golden Monkey King Staff",
        },
        {
          trait_type: "Hand",
          value: "Golden Bat",
        },
        {
          trait_type: "Hand",
          value: "Golden Coin",
        },
        {
          trait_type: "Hand",
          value: "Golden Q-tip",
        },
        {
          trait_type: "Hand",
          value: "Golden Ledger",
        },
        {
          trait_type: "Hand",
          value: "Golden Dart",
        },
        {
          trait_type: "Hand",
          value: "Golden Hook Sword",
        },
        {
          trait_type: "Hand",
          value: "Golden Paintbrush",
        },
        {
          trait_type: "Hand",
          value: "Golden Axe",
        },
        {
          trait_type: "Hand",
          value: "Golden Guitar Pick",
        },
        {
          trait_type: "Hand",
          value: "Golden Blow Pop",
        },
        {
          trait_type: "Hand",
          value: "Golden Spoon",
        },
        {
          trait_type: "Hand",
          value: "Golden Round Fan",
        },
        {
          trait_type: "Hand",
          value: "Golden Nunchuck",
        },
        {
          trait_type: "Hand",
          value: "Golden Katana Sheathed",
        },
        {
          trait_type: "Hand",
          value: "Golden Katana",
        },
      ],
      limit: 100,
    });
    const type = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Type",
          value: "Golden Bean",
        },
      ],
      limit: 100,
    });
    const offhands = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Golden Round Fan",
        },
        {
          trait_type: "Offhand",
          value: "Golden Dart",
        },
        {
          trait_type: "Offhand",
          value: "Golden Pencil",
        },
        {
          trait_type: "Offhand",
          value: "Golden Lipstick",
        },
        {
          trait_type: "Offhand",
          value: "Golden Guitar Pick",
        },
        {
          trait_type: "Offhand",
          value: "Golden Mahjong",
        },
        {
          trait_type: "Offhand",
          value: "Golden Boxing Glove",
        },
        {
          trait_type: "Offhand",
          value: "Golden Katana Sheath",
        },
        {
          trait_type: "Offhand",
          value: "Golden Q-tip",
        },
        {
          trait_type: "Offhand",
          value: "Golden Ledger",
        },
        {
          trait_type: "Offhand",
          value: "Golden Lollipop",
        },
        {
          trait_type: "Offhand",
          value: "Golden Fan",
        },
        {
          trait_type: "Offhand",
          value: "Golden Cards",
        },
        {
          trait_type: "Offhand",
          value: "Golden Banner",
        },
        {
          trait_type: "Offhand",
          value: "Golden Stylus",
        },
        {
          trait_type: "Offhand",
          value: "Golden Boombox",
        },
        {
          trait_type: "Offhand",
          value: "Golden Dumbbell",
        },
        {
          trait_type: "Offhand",
          value: "Golden Magic Wand",
        },
        {
          trait_type: "Offhand",
          value: "Golden Paintbrush",
        },
        {
          trait_type: "Offhand",
          value: "Golden Leaf",
        },
        {
          trait_type: "Offhand",
          value: "Golden Toothpick",
        },
        {
          trait_type: "Offhand",
          value: "Golden Basketball",
        },
        {
          trait_type: "Offhand",
          value: "Golden Spray Paint",
        },
        {
          trait_type: "Offhand",
          value: "Golden Cocktail Umbrella",
        },
        {
          trait_type: "Offhand",
          value: "Golden Sake",
        },
        {
          trait_type: "Offhand",
          value: "Golden Twig",
        },
        {
          trait_type: "Offhand",
          value: "Golden Cigar",
        },
        {
          trait_type: "Offhand",
          value: "Golden Lantern",
        },
        {
          trait_type: "Offhand",
          value: "Golden Coffee Cup",
        },
        {
          trait_type: "Offhand",
          value: "Golden Floorsweeper",
        },
        {
          trait_type: "Offhand",
          value: "Golden Monkey King Staff",
        },
        {
          trait_type: "Offhand",
          value: "Golden Guitar",
        },
        {
          trait_type: "Offhand",
          value: "Golden Fork",
        },
        {
          trait_type: "Offhand",
          value: "Golden Tech Deck",
        },
        {
          trait_type: "Offhand",
          value: "Golden Monk Staff",
        },
        {
          trait_type: "Offhand",
          value: "Golden Kanabo",
        },
        {
          trait_type: "Offhand",
          value: "Golden Axe",
        },
        {
          trait_type: "Offhand",
          value: "Golden Zanbato",
        },
        {
          trait_type: "Offhand",
          value: "Golden Shuriken",
        },
        {
          trait_type: "Offhand",
          value: "Golden Coin",
        },
        {
          trait_type: "Offhand",
          value: "Golden Glove",
        },
        {
          trait_type: "Offhand",
          value: "Gold Bean",
        },
      ],
      limit: 100,
    });

    return {
      tokens: sort([
        ...clothings.tokens,
        ...hands.tokens,
        ...offhands.tokens,
        ...type.tokens,
      ]),
    };
  },
};
