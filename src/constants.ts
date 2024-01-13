import { Filter } from "./types";

export const AzukiFilter: Filter = {
  contracts: ["0xED5AF388653567Af2F388E6224dC7C4b3241C544"],
  name: "Azuki",
  icon: "/images/azuki-emblem.webp",
};

export const BeanzFilter: Filter = {
  contracts: ["0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949"],
  name: "Beanz",
  icon: "/images/beanz-emblem.webp",
};

export const ElementalFilter: Filter = {
  contracts: ["0xB6a37b5d14D502c3Ab0Ae6f3a0E058BC9517786e"],
  name: "Elemental",
  icon: "/images/elemental-emblem.webp",
};

export const ShonenFilter: Filter = {
  contracts: ["0xB6a37b5d14D502c3Ab0Ae6f3a0E058BC9517786e"],
  attributes: [
    {
      trait_type: "Subtype",
      value: "Kid",
    },
  ],
  name: "Shonen",
  icon: "/images/shonen-emblem.webp",
};

export const AnimalFilter: Filter = {
  contracts: ["0xB6a37b5d14D502c3Ab0Ae6f3a0E058BC9517786e"],
  attributes: [
    {
      trait_type: "Subtype",
      value: "Sloth",
    },
    {
      trait_type: "Subtype",
      value: "Frog",
    },
    {
      trait_type: "Subtype",
      value: "Red Panda",
    },
    {
      trait_type: "Subtype",
      value: "Cat",
    },
  ],
  name: "Animal",
  icon: "/images/animal-emblem.webp",
};

export const collections: Filter[] = [
  AzukiFilter,
  BeanzFilter,
  ElementalFilter,
  ShonenFilter,
  AnimalFilter,
];
