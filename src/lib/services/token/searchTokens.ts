import config from "@/config";
import { Collection } from "@/lib/emblems/enums";
import {
  Attribute,
  Nft,
  SearchTokensResponse,
} from "@/lib/services/token/types";
import { getAnimePointsByTokenIds } from "@/services/animePoints";
import ky from "ky";

interface SearchTokensOptions {
  contracts?: string[];
  attributes?: Attribute[];
  limit?: number;
  continuation?: string;
  tokens?: string[];
  collection?: string;
  name?: string;
}

export default async function searchTokens(
  options: SearchTokensOptions
): Promise<SearchTokensResponse> {
  const response = await ky(
    `https://api.reservoir.tools/tokens/v7?includeAttributes=true&limit=${
      options.limit || 20
    }${
      options.contracts
        ? `&collection=${options.contracts?.join(
            "&contract="
          )}${formatAttributes(options.attributes)}`
        : ""
    }${options.continuation ? `&continuation=${options.continuation}` : ""}${
      options.tokens ? `&tokens[0]=${options.tokens.join("&tokens=")}` : ""
    }${options.collection ? `&collection=${options.collection}` : ""}${
      options.name ? `&tokenName=${options.name}` : ""
    }`,
    {
      headers: {
        "x-api-key": config.RESERVOIR_API_KEY,
      },
    }
  );

  const collections = await response.json<{ tokens: Nft[] }>();
  const points = await getAnimePointsByTokenIds(
    options.contracts ? options.contracts[0] : Collection.AZUKI,
    collections.tokens.map(({ token }) => token.tokenId)
  );

  collections.tokens = collections.tokens.map(
    ({ market, token, updatedAt }, index) => {
      return {
        market,
        token: {
          ...token,
          points: points[index] || {
            gachaponRarityCount: [],
            numCredits: 0,
          },
        },
        updatedAt,
      };
    }
  );

  console.log(collections);

  return collections;
}

function formatAttributes(attributes: Attribute[] | undefined): string {
  if (!attributes) return "";

  return `&${attributes
    .reduce((prev, attribute) => {
      return [
        ...prev,
        `attributes[${attribute.trait_type}]=${attribute.value}`,
      ];
    }, [] as string[])
    .join("&")}`;
}
