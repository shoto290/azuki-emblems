import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const Gold: Emblem = {
  id: EmblemId.GOLD,
  name: "Gold",
  contracts: [Collection.AZUKI],
  icon: "/images/gold-emblem.webp",
  type: EmblemType.AZUKI,
  points: [
    {
      description: "Gold Trait",
      value: 1000,
      multiples: [4000, 10000],
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
              trait_type: "Neck",
              value: "Golden Headphones",
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
              value: "Golden Katana",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Sheathed Katana",
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
              value: "Golden Bat",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Ticket",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Umbrella",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Fishing Rod",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Golden Shinai",
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
              value: "Golden Hook Sword",
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
              value: "Golden Skateboard",
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
              value: "Golden Floorsweeper",
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
              value: "Golden Kanabo",
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
              value: "Golden Bean",
            },
          ],
        },
      ],
    },
  ],
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
