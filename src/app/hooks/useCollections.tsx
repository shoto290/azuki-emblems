"use client";

import { useState } from "react";
import { Emblem } from "@/lib/emblems/types";
import { Azuki } from "@/lib/emblems/Azuki";
import { useSearchParams } from "next/navigation";
import {
  azukiEmblems,
  beanzEmblems,
  elementalEmblems,
} from "@/lib/emblems/constants";
import { useCollectionsContext } from "../contexts/CollectionsContext";

export default function useCollections(defaultEmblemName: string | null) {
  const defaultEmblem = [
    ...azukiEmblems,
    ...beanzEmblems,
    ...elementalEmblems,
  ].find(({ id }) => id === defaultEmblemName);
  const [selectedEmblem, setSelectedEmblem] = useState<Emblem>(
    defaultEmblem || Azuki
  );
  const { collections, setCollections, isFetchingMore, setIsFetchingMore } =
    useCollectionsContext();

  return {
    collections,
    selectedEmblem,
    setSelectedEmblem,
    isFetchingMore,
    setIsFetchingMore,
    setCollections,
  };
}
