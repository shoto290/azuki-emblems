import { useEffect, useState } from "react";
import { Nft } from "@/lib/services/token/types";
import { Emblem } from "@/lib/emblems/types";
import { Azuki } from "@/lib/emblems/Azuki";

export default function useCollections() {
  const [selectedEmblem, setSelectedEmblem] = useState<Emblem>(Azuki);
  const [collections, setCollections] = useState<Nft[] | null>(null);

  useEffect(() => {
    (async () => {
      setCollections(null);
      const tokens = await selectedEmblem.getTokens();
      setCollections(tokens);
    })();
  }, [selectedEmblem]);

  return {
    collections,
    selectedEmblem,
    setSelectedEmblem,
  };
}
