import searchTokens from "../services/token/searchTokens";
import { Collection, EmblemId, EmblemType } from "./enums";
import { sort } from "./sort";
import { Emblem } from "./types";

export const BeanzElements: Emblem = {
  id: EmblemId.BEANZ_ELEMENTS,
  name: "Beanz Elements",
  contracts: [Collection.BEANZ],
  icon: "/images/beanz-elements-emblem.webp",
  type: EmblemType.BEANZ,
  points: [
    {
      description: "Elemental Eyes",
      value: 13,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Fire - Blank",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Fire",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Hand",
      value: 13,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Fire",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Earth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Water",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Hand",
              value: "Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Offhand",
      value: 13,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Fire",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Earth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Water",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Offhand",
              value: "Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Special",
      value: 34,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Fire",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Earth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Water",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Special",
              value: "Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Headgear",
      value: 67,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Fire",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Earth",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Water",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Headgear",
              value: "Lightning",
            },
          ],
        },
      ],
    },
    {
      description: "Elemental Type",
      value: 938,
      conditions: [
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Fire Bean",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Earth Bean",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Water Bean",
            },
          ],
        },
        {
          attributes: [
            {
              trait_type: "Type",
              value: "Lightning Bean",
            },
          ],
        },
      ],
    },
  ],
  getTokens: async () => {
    const elements = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Type",
          value: "Fire Bean",
        },
        {
          trait_type: "Type",
          value: "Earth Bean",
        },
        {
          trait_type: "Type",
          value: "Water Bean",
        },
        {
          trait_type: "Type",
          value: "Lightning Bean",
        },
      ],
      limit: 40,
    });
    const eyes = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Type",
          value: "Fire - Blank",
        },
        {
          trait_type: "Type",
          value: "Fire",
        },
        {
          trait_type: "Type",
          value: "Lightning",
        },
      ],
      limit: 100,
    });
    const hands = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Hand",
          value: "Fire",
        },
        {
          trait_type: "Hand",
          value: "Earth",
        },
        {
          trait_type: "Hand",
          value: "Water",
        },
        {
          trait_type: "Hand",
          value: "Lightning",
        },
      ],
      limit: 100,
    });
    const offhands = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Offhand",
          value: "Fire",
        },
        {
          trait_type: "Offhand",
          value: "Earth",
        },
        {
          trait_type: "Offhand",
          value: "Water",
        },
        {
          trait_type: "Offhand",
          value: "Lightning",
        },
      ],
      limit: 100,
    });
    const specials = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Special",
          value: "Fire",
        },
        {
          trait_type: "Special",
          value: "Earth",
        },
        {
          trait_type: "Special",
          value: "Water",
        },
        {
          trait_type: "Special",
          value: "Lightning",
        },
      ],
      limit: 100,
    });
    const headgears = await searchTokens({
      contracts: [Collection.BEANZ],
      attributes: [
        {
          trait_type: "Headgear",
          value: "Fire",
        },
        {
          trait_type: "Headgear",
          value: "Earth",
        },
        {
          trait_type: "Headgear",
          value: "Water",
        },
        {
          trait_type: "Headgear",
          value: "Lightning",
        },
      ],
      limit: 100,
    });

    return {
      tokens: sort([
        ...elements.tokens,
        ...eyes.tokens,
        ...hands.tokens,
        ...offhands.tokens,
        ...specials.tokens,
        ...headgears.tokens,
      ]),
    };
  },
};
