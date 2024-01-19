import {
  Attribute,
  Nft,
  SearchTokensResponse,
} from "@/lib/services/token/types";
import { EmblemType } from "./enums";

export interface Condition {
  attributes?: Attribute[];
  tokenId?: number;
  requiredConditions?: number;
}

export interface Point {
  description: string;
  value: number;
  infinite?: boolean;
  conditions?: Condition[];
  multiples?: number[];
}

export interface GetTokensParams {
  continuation?: string;
  name?: string;
}

export interface Emblem {
  id: string;
  name: string;
  contracts: string[];
  icon: string;
  points: Point[];
  type: EmblemType;
  getTokens: (params: GetTokensParams) => Promise<SearchTokensResponse>;
}
