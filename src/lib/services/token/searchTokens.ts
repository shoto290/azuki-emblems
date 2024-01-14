import config from "@/config";
import { Attribute, Nft } from "@/lib/services/token/types";
import ky from "ky";

interface SearchTokensOptions {
  contracts?: string[];
  attributes?: Attribute[];
}

export default async function searchTokens(
  options: SearchTokensOptions
): Promise<Nft[]> {
  const response = await ky(
    `https://api.reservoir.tools/tokens/v7?collection=${options.contracts?.join(
      "&contract="
    )}${formatAttributes(options.attributes)}`,
    {
      headers: {
        "x-api-key": config.reservoirApiKey,
      },
    }
  );

  const collections = await response.json<{ tokens: Nft[] }>();

  return collections.tokens;
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
