import config from "@/config";
import {
  Attribute,
  Nft,
  SearchTokensResponse,
} from "@/lib/services/token/types";
import ky from "ky";

interface SearchTokensOptions {
  contracts?: string[];
  attributes?: Attribute[];
  limit?: number;
  continuation?: string;
}

export default async function searchTokens(
  options: SearchTokensOptions
): Promise<SearchTokensResponse> {
  const response = await ky(
    `https://api.reservoir.tools/tokens/v7?includeAttributes=true&limit=${
      options.limit || 20
    }&collection=${options.contracts?.join("&contract=")}${formatAttributes(
      options.attributes
    )}${options.continuation ? `&continuation=${options.continuation}` : ""}`,
    {
      headers: {
        "x-api-key": config.RESERVOIR_API_KEY,
      },
    }
  );

  const collections = await response.json<{ tokens: Nft[] }>();
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
