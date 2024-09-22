import { AnimePoints } from "@/services/animePoints";

export interface Filter {
  contracts?: string[];
  attributes?: Attribute[];
  icon?: string;
  name: string;
}

export interface Attribute {
  trait_type: string;
  value: string;
  strict?: boolean;
}

export interface AttributeDetail {
  key: string;
  kind: string;
  value: string;
  tokenCount: number;
  onSaleCount: number;
  floorAskPrice: {
    currency: {
      contract: string;
      name: string;
      symbol: string;
      decimals: number;
    };
    amount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
  };
  topBidValue: number;
  createdAt: string;
}

export interface Token {
  chainId: number;
  contract: string;
  tokenId: string;
  name: string;
  description: string | null;
  image: string;
  imageSmall: string;
  imageLarge: string;
  metadata: {
    imageOriginal: string;
    imageMimeType: string;
  };
  attributes: AttributeDetail[];
  media: null;
  kind: string;
  isFlagged: boolean;
  isSpam: boolean;
  isNsfw: boolean;
  metadataDisabled: boolean;
  lastFlagUpdate: string;
  lastFlagChange: string;
  supply: string;
  remainingSupply: string;
  decimals: null;
  rarity: number;
  rarityRank: number;
  collection: {
    id: string;
    name: string;
    image: string;
    slug: string;
    symbol: string;
    creator: string;
    tokenCount: number;
    metadataDisabled: boolean;
    floorAskPrice: {
      currency: {
        contract: string;
        name: string;
        symbol: string;
        decimals: number;
      };
      amount: {
        raw: string;
        decimal: number;
        usd: number;
        native: number;
      };
    };
  };
  owner: string;
  mintStages: any[];
  points: AnimePoints;
  isGreenBeanClaimed: boolean;
}

export interface FloorAsk {
  id: string;
  price: {
    currency: {
      contract: string;
      name: string;
      symbol: string;
      decimals: number;
    };
    amount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
  };
  maker: string;
  validFrom: number;
  validUntil: number;
  source: {
    id: string;
    domain: string;
    name: string;
    icon: string;
    url: string;
  };
}

export interface Market {
  floorAsk: FloorAsk;
}

export interface Nft {
  token: Token;
  market: Market;
  updatedAt: string;
}

export interface SearchTokensResponse {
  tokens: Nft[];
  continuation?: string;
}
