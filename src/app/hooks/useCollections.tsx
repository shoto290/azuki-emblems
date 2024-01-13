import { useEffect, useState } from "react";
import ky from "ky";
import { Attribute, Filter, Nft } from "@/types";
import { AzukiFilter } from "@/constants";
import config from "@/config";

export default function useCollections() {
  const [selectedBadge, setSelectedBadge] = useState<Filter>(AzukiFilter);
  const [collections, setCollections] = useState<Nft[] | null>(null);

  useEffect(() => {
    (async () => {
      setCollections(null);

      const response = await ky(
        `https://api.reservoir.tools/tokens/v7?collection=${selectedBadge.contracts?.join(
          "&contract="
        )}${formatAttributes(selectedBadge.attributes)}`,
        {
          headers: {
            "x-api-key": config.reservoirApiKey,
          },
        }
      );

      const collections = await response.json<{ tokens: Nft[] }>();

      setCollections(collections.tokens);
    })();
  }, [selectedBadge]);

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

  return {
    collections,
    selectedBadge,
    setSelectedBadge,
  };
}
