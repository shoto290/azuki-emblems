import { Unknown } from "./Unknown";
import { Animal } from "./Animal";
import { Azuki } from "./Azuki";
import { Beanz } from "./Beanz";
import { Butterfly } from "./Butterfly";
import { Cat } from "./Cat";
import { Duality } from "./Duality";
import { Earth } from "./Earth";
import { Elemental } from "./Elemental";
import { ElementalGold } from "./ElementalGold";
import { Fire } from "./Fire";
import { Fireflies } from "./Fireflies";
import { FoxFire } from "./FoxFire";
import { Frog } from "./Frog";
import { Gold } from "./Gold";
import { Kigu } from "./Kigu";
import { Lightning } from "./Lightning";
import { RedPanda } from "./RedPanda";
import { Sakura } from "./Sakura";
import { Shonen } from "./Shonen";
import { Sloth } from "./Sloth";
import { Smoke } from "./Smoke";
import { Spirit } from "./Spirit";
import { Water } from "./Water";
import { EmblemType } from "./enums";
import { Emblem } from "./types";
import { Inferno } from "./Inferno";
import { Polarity } from "./Polarity";
import { Torrent } from "./Torrent";
import { Tectonic } from "./Tectonic";
import { Surge } from "./Surge";
import { ElementalKigu } from "./ElementalKigu";
import { ForceOfNature } from "./ForceOfNature";

export const azukiEmblems = [
  Azuki,
  Gold,
  Spirit,
  Frog,
  RedPanda,
  Cat,
  Sloth,
  Fireflies,
  Butterfly,
  FoxFire,
  Smoke,
  Sakura,
  Lightning,
  Earth,
  Fire,
  Water,
  Kigu,
  Duality,
];

export const beanzEmblems = [Beanz];

export const elementalEmblems = [
  Elemental,
  ElementalGold,
  Unknown,
  Animal,
  Shonen,
  Inferno,
  Torrent,
  Tectonic,
  Surge,
  ForceOfNature,
  ElementalKigu,
  Polarity,
];

export const emblems: {
  type: string;
  emblems: Emblem[];
}[] = [
  {
    type: EmblemType.AZUKI,
    emblems: azukiEmblems,
  },
  {
    type: EmblemType.ELEMENTAL,
    emblems: elementalEmblems,
  },
  {
    type: EmblemType.BEANZ,
    emblems: beanzEmblems,
  },
];
