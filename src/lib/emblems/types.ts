import { Nft } from "@/lib/services/token/types";

export interface Emblem {
  id: string;
  name: string;
  contracts: string[];
  icon: string;
  getTokens: () => Promise<Nft[]>;
}
