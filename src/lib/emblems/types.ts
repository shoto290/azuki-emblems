import { Attribute, Nft } from "@/lib/services/token/types";

export interface Condition {
  attributes?: Attribute[];
  tokenId?: number;
}

export interface Point {
  description: string;
  value: number;
  infinite?: boolean;
  conditions?: Condition[];
}

export interface Emblem {
  id: string;
  name: string;
  contracts: string[];
  icon: string;
  points: Point[];
  getTokens: () => Promise<Nft[]>;
}
