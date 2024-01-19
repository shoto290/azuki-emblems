import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const ForceOfNature: Emblem = {
  id: EmblemId.FORCE_OF_NATURE,
  name: "Force of nature",
  contracts: [Collection.ELEMENTAL],
  icon: "/images/force-of-nature-emblem.webp",
  type: EmblemType.ELEMENTAL,
  points: [
    {
      description: "Elemental Clothing",
      value: 200,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Raijin",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Fire Suit",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Water Pendant",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Clothing",
              value: "Sand Robes",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Crown",
      value: 200,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Crown - Water",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Crown - Lightning",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Crown - Earth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Crown - Fire",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Hair",
      value: 400,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "On Fire - Brown",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "On Fire - Blue",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "On Fire - Coral",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "On Fire - Orange",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "On Fire - Red",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "On Fire - Black",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Underwater - Blue",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Underwater - Red",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Underwater - Black",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Underwater - Silver",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Underwater - Teal",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Underwater - Dirty Blonde",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Blue",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Teal",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Brown",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Red",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Green",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Silver",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Blue",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Dirty Blonde",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Black",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Indigo",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hair",
              value: "Electrified - Black",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Offhand",
      value: 70,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Blade",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Fist",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Hammer",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Fan",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Eyes",
      value: 70,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Eyes",
              value: "Lightning",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Eyes",
              value: "Fire",
            },
          ],
        },
      ],
    },
    {
      description: "Fire Breath",
      value: 70,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Mouth",
              value: "Fire Breath",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Special",
      value: 50,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Butterflies",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning Blast",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning Strike",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Stars",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fire Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lava",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Smolder",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Embers",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Water Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Underwater",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Rain",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Bubble",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Blizzard",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Growth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Rock Storm",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Sand Vortex",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Leaves",
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
          value: "Raijin",
        },
        {
          trait_type: "Clothing",
          value: "Fire Suit",
        },
        {
          trait_type: "Clothing",
          value: "Water Pendant",
        },
        {
          trait_type: "Clothing",
          value: "Sand Robes",
        },
      ],
      limit: 100,
    });
    const crowns = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Headgear",
          value: "Crown - Water",
        },
        {
          trait_type: "Headgear",
          value: "Crown - Lightning",
        },
        {
          trait_type: "Headgear",
          value: "Crown - Earth",
        },
        {
          trait_type: "Headgear",
          value: "Crown - Fire",
        },
      ],
      limit: 100,
    });
    const hairs = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Hair",
          value: "On Fire - Brown",
        },
        {
          trait_type: "Hair",
          value: "On Fire - Blue",
        },
        {
          trait_type: "Hair",
          value: "On Fire - Coral",
        },
        {
          trait_type: "Hair",
          value: "On Fire - Orange",
        },
        {
          trait_type: "Hair",
          value: "On Fire - Red",
        },
        {
          trait_type: "Hair",
          value: "On Fire - Black",
        },
        {
          trait_type: "Hair",
          value: "Underwater - Blue",
        },
        {
          trait_type: "Hair",
          value: "Underwater - Red",
        },
        {
          trait_type: "Hair",
          value: "Underwater - Black",
        },
        {
          trait_type: "Hair",
          value: "Underwater - Silver",
        },
        {
          trait_type: "Hair",
          value: "Underwater - Teal",
        },
        {
          trait_type: "Hair",
          value: "Underwater - Dirty Blonde",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Blue",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Teal",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Brown",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Red",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Green",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Silver",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Blue",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Dirty Blonde",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Black",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Indigo",
        },
        {
          trait_type: "Hair",
          value: "Electrified - Black",
        },
      ],
      limit: 100,
    });
    const eyes = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Eyes",
          value: "Lightning",
        },
        {
          trait_type: "Eyes",
          value: "Fire",
        },
      ],
      limit: 100,
    });
    const offhands = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Blade",
        },
        {
          trait_type: "Offhand",
          value: "Fist",
        },
        {
          trait_type: "Offhand",
          value: "Hammer",
        },
        {
          trait_type: "Offhand",
          value: "Fan",
        },
      ],
      limit: 100,
    });
    const specials = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Special",
          value: "Butterflies",
        },
        {
          trait_type: "Special",
          value: "Lightning Blast",
        },
        {
          trait_type: "Special",
          value: "Lightning Vortex",
        },
        {
          trait_type: "Special",
          value: "Lightning Strike",
        },
        {
          trait_type: "Special",
          value: "Stars",
        },
        {
          trait_type: "Special",
          value: "Growth",
        },
        {
          trait_type: "Special",
          value: "Rock Storm",
        },
        {
          trait_type: "Special",
          value: "Sand Vortex",
        },
        {
          trait_type: "Special",
          value: "Leaves",
        },
        {
          trait_type: "Special",
          value: "Water Vortex",
        },
        {
          trait_type: "Special",
          value: "Underwater",
        },
        {
          trait_type: "Special",
          value: "Rain",
        },
        {
          trait_type: "Special",
          value: "Bubble",
        },
        {
          trait_type: "Special",
          value: "Blizzard",
        },
        {
          trait_type: "Special",
          value: "Fire Vortex",
        },
        {
          trait_type: "Special",
          value: "Lava",
        },
        {
          trait_type: "Special",
          value: "Smolder",
        },
        {
          trait_type: "Special",
          value: "Embers",
        },
      ],
      limit: 100,
    });
    const mouths = await searchTokens({
      contracts: [Collection.ELEMENTAL],
      attributes: [
        {
          trait_type: "Mouth",
          value: "Fire Breath",
        },
      ],
      limit: 100,
    });

    return {
      tokens: sort([
        ...clothings.tokens,
        ...crowns.tokens,
        ...hairs.tokens,
        ...eyes.tokens,
        ...offhands.tokens,
        ...specials.tokens,
        ...mouths.tokens,
      ]),
    };
  },
};
