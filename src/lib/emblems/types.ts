import { Nft } from "@/lib/services/token/types";

export interface Point {
  description: string;
  value: number;
  infinite?: boolean;
}

export interface Emblem {
  id: string;
  name: string;
  contracts: string[];
  icon: string;
  points?: Point[];
  getTokens: () => Promise<Nft[]>;
}
