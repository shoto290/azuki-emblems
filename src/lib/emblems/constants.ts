import { Animal } from "./Animal";
import { Azuki } from "./Azuki";
import { Beanz } from "./Beanz";
import { Butterfly } from "./Butterfly";
import { Cat } from "./Cat";
import { Duality } from "./Duality";
import { Earth } from "./Earth";
import { Elemental } from "./Elemental";
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

export const elementalEmblems = [Elemental, Animal, Shonen];

export const emblems: {
  type: string;
  emblems: Emblem[];
}[] = [
  {
    type: EmblemType.AZUKI,
    emblems: azukiEmblems,
  },
  {
    type: EmblemType.BEANZ,
    emblems: beanzEmblems,
  },
  {
    type: EmblemType.ELEMENTAL,
    emblems: elementalEmblems,
  },
];
