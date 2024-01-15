import { useEffect, useState } from "react";
import { Nft } from "@/lib/services/token/types";
import { Emblem } from "@/lib/emblems/types";
import { Azuki } from "@/lib/emblems/Azuki";
import { useRouter, useSearchParams } from "next/navigation";
import { emblems } from "@/lib/emblems/constants";

export default function useCollections() {
  const searchParams = useSearchParams();
  const defaultEmblem = emblems.find(
    ({ id }) => id === searchParams.get("emblem")
  );
  const { replace } = useRouter();
  const [selectedEmblem, setSelectedEmblem] = useState<Emblem>(
    defaultEmblem || Azuki
  );
  const [collections, setCollections] = useState<Nft[] | null>(null);

  useEffect(() => {
    replace(`?emblem=${selectedEmblem.id}`);

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
