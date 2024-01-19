import { Emblem } from "@/lib/emblems/types";
import { SearchTokensResponse } from "@/lib/services/token/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface FeedProps {
  collections: SearchTokensResponse | null;
  setCollections: (collection: SearchTokensResponse | null) => void;
  selectedEmblem: Emblem;
}

export function useFeed({
  collections,
  setCollections,
  selectedEmblem,
}: FeedProps) {
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState<"grid" | "row">("grid");
  const { replace } = useRouter();

  useEffect(() => {
    const display = localStorage.getItem("display") as "grid" | "row";
    if (display) {
      setDisplay(display);
    }
  }, []);

  useEffect(() => {
    replace(`?emblem=${selectedEmblem.id}`);

    if (isOpen) {
      setIsOpen(false);
    }

    (async () => {
      setIsFetchingMore(false);
      setCollections(null);
      const tokens = await selectedEmblem.getTokens();
      setCollections(tokens);
    })();
  }, [selectedEmblem]);

  useEffect(() => {
    console.log("fetching more", isFetchingMore, collections);

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
  }, [isFetchingMore, collections]);

  const handleScroll = async () => {
    if (isFetchingMore) return;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      console.log("bottom");
      setIsFetchingMore(true);
    }
  };

  const onClickDisplay = () => {
    const newDisplay = display === "grid" ? "row" : "grid";
    setDisplay(newDisplay);
    localStorage.setItem("display", newDisplay);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", () => handleScroll());
    };
  }, []);

  return {
    isFetchingMore,
    collections,
    display,
    onClickDisplay,
    isOpen,
    setIsOpen,
  };
}
