"use client";

import { SearchTokensResponse } from "@/lib/services/token/types";
import { ReactNode, createContext, useContext, useState } from "react";

export const CollectionsContext = createContext<{
  collections: SearchTokensResponse | null;
  setCollections: (collection: any) => void;
  isFetchingMore: boolean;
  setIsFetchingMore: (isFetchingMore: boolean) => void;
}>({
  collections: null,
  setCollections: (collection: any) => {},
  isFetchingMore: false,
  setIsFetchingMore: (isFetchingMore: boolean) => {},
});

export function CollectionsProvider({ children }: { children: ReactNode }) {
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);
  const [collections, setCollections] = useState<SearchTokensResponse | null>(
    null
  );

  return (
    <CollectionsContext.Provider
      value={{ collections, setCollections, isFetchingMore, setIsFetchingMore }}
    >
      {children}
    </CollectionsContext.Provider>
  );
}

export function useCollectionsContext() {
  return useContext(CollectionsContext);
}
