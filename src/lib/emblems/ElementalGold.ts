import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const ElementalGold: Emblem = {
  id: EmblemId.ELEMENTAL_GOLD,
  name: "Elemental Gold",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/elemental-gold-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Gold Trait",
      value: 300,
      multiples: [550],
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cyber Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Spiked Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Terracotta Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Iridescent Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Bathrode - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Neck",
              value: "Boxing Gloves - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Neck",
              value: "Chain - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Sawblade - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Lighter - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Poker Cards - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Sake - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Watch - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Rapier - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Shovel - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Envelope - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Manifesto - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Gunblade - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Gold Club - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Microphone - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Moon Spade - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Hammer - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Bean Katana - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Jian - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Nunchucks - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Bamboo Staff - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Guan Dao - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Zanbato - Gold",
            },
          ],
        },
      ],
    },
    {
      description: "Gold Clothing",
      value: 200,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Cyber Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Spiked Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Terracotta Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Iridescent Armor - Gold",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Bathrode - Gold",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const clothings = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Clothing",
          value: "Cyber Armor - Gold",
        },
        {
          trait_type: "Clothing",
          value: "Spiked Armor - Gold",
        },
        {
          trait_type: "Clothing",
          value: "Terracotta Armor - Gold",
        },
        {
          trait_type: "Clothing",
          value: "Iridescent Armor - Gold",
        },
        {
          trait_type: "Clothing",
          value: "Bathrode - Gold",
        },
      ],
      limit: 47,
    });
    const necks = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Neck",
          value: "Boxing Gloves - Gold",
        },
        {
          trait_type: "Neck",
          value: "Chain - Gold",
        },
      ],
      limit: 30,
    });
    const offhands = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Sawblade - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Lighter - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Poker Cards - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Sake - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Watch - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Rapier - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Shovel - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Envelope - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Manifesto - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Gunblade - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Gold Club - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Microphone - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Moon Spade - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Hammer - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Bean Katana - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Jian - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Nunchucks - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Bamboo Staff - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Guan Dao - Gold",
        },
        {
          trait_type: "Offhand",
          value: "Zanbato - Gold",
        },
      ],
      limit: 100,
    });

    return {
      tokens: sort([...clothings.tokens, ...necks.tokens, ...offhands.tokens]),
    };
  },
};
