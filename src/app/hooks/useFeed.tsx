import { Emblem, GetTokensParams } from "@/lib/emblems/types";
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
  const [tokenId, setTokenId] = useState("");
  const [awaitFetching, setAwaitFetching] = useState<
    NodeJS.Timeout | undefined
  >();
  const [display, setDisplay] = useState<"grid" | "row">("grid");
  const { replace } = useRouter();

  async function fetchTokens(): Promise<void> {
    const tokens = await selectedEmblem.getTokens({
      name: tokenId !== "" ? tokenId : undefined,
    });
    setCollections(tokens);
  }

  useEffect(() => {
    const display = localStorage.getItem("display") as "grid" | "row";
    if (display) {
      setDisplay(display);
    }
  }, []);

  useEffect(() => {
    replace(`?emblem=${selectedEmblem.id}`);

    setIsFetchingMore(false);
    setCollections(null);

    if (isOpen) {
      setIsOpen(false);
    }

    if (tokenId !== "") {
      setTokenId("");
    }

    fetchTokens();
  }, [selectedEmblem]);

  useEffect(() => {
    if (awaitFetching) clearTimeout(awaitFetching);

    const timeout = setTimeout(() => {
      fetchTokens();
      setAwaitFetching(undefined);
    }, 1500);

    setAwaitFetching((prev) => {
      return timeout;
    });
  }, [tokenId]);

  useEffect(() => {
    if (!isFetchingMore || !collections?.continuation) return;

    (async () => {
      if (!collections) return;
      const tokens = await selectedEmblem.getTokens({
        continuation: collections.continuation,
        name: tokenId !== "" ? tokenId : undefined,
      });

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
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 10
    ) {
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
    tokenId,
    setTokenId,
  };
}
