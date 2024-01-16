"use client";

import { useEffect, useState } from "react";
import { Nft, SearchTokensResponse } from "@/lib/services/token/types";
import { Emblem } from "@/lib/emblems/types";
import { Azuki } from "@/lib/emblems/Azuki";
import { useRouter, useSearchParams } from "next/navigation";
import {
  azukiEmblems,
  beanzEmblems,
  elementalEmblems,
} from "@/lib/emblems/constants";
import { useCollectionsContext } from "../contexts/CollectionsContext";

export default function useCollections() {
  const searchParams = useSearchParams();
  const defaultEmblem = [
    ...azukiEmblems,
    ...beanzEmblems,
    ...elementalEmblems,
  ].find(({ id }) => id === searchParams.get("emblem"));
  const { replace } = useRouter();
  const [selectedEmblem, setSelectedEmblem] = useState<Emblem>(
    defaultEmblem || Azuki
  );
  const { collections, setCollections, isFetchingMore, setIsFetchingMore } =
    useCollectionsContext();

  useEffect(() => {
    replace(`?emblem=${selectedEmblem.id}`);

    (async () => {
      setCollections(null);
      const tokens = await selectedEmblem.getTokens();
      setCollections(tokens);
    })();
  }, [selectedEmblem]);

  useEffect(() => {
    if (!isFetchingMore || !collections?.continuation) return;

    (async () => {
      if (!collections) return;
      const tokens = await selectedEmblem.getTokens(collections.continuation);

      setCollections({
        tokens: [...collections.tokens, ...tokens.tokens],
        continuation: tokens.continuation,
      });
      setIsFetchingMore(false);
    })();
  }, [isFetchingMore]);

  return {
    collections,
    selectedEmblem,
    setSelectedEmblem,
    isFetchingMore,
    setIsFetchingMore,
  };
}
