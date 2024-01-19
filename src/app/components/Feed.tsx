"use client";

import useCollections from "../hooks/useCollections";
import Filter from "./Filter";
import Footer from "./Footer";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/lib/ui/components/ui/button";
import RowFeed from "./RowFeed";
import CaseFeed from "./CaseFeed";
import { LayoutGrid, ListIcon } from "lucide-react";
import { useFeed } from "../hooks/useFeed";
import { FeedToolbar } from "./FeedToolbar";

export default function Feed() {
  const { collections, setSelectedEmblem, selectedEmblem, setCollections } =
    useCollections();
  const { display, onClickDisplay, setIsOpen, isOpen, tokenId, setTokenId } =
    useFeed({
      collections,
      setCollections,
      selectedEmblem,
    });
  const { isMobile } = useBreakpoints();

  return (
    <div className={cn("flex flex-col md:flex-row gap-1")}>
      {isMobile && (
        <div className="fixed bottom-0 left-0 p-4 w-full z-20 bg-primary/10 backdrop-blur-xl rounded-t-5xl">
          <Button
            variant="secondary"
            className=" w-full flex gap-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img className="h-6 w-6" src={selectedEmblem.icon} />
            {selectedEmblem.name}
          </Button>
        </div>
      )}
      {isMobile && isOpen && (
        <div className="fixed left-0 w-full h-[calc(89dvh)] flex flex-col items-center p-2 z-10">
          {/* <ConnectKitButton /> */}
          <Filter
            setSelectedEmblem={setSelectedEmblem}
            selectedEmblem={selectedEmblem}
            loading={!collections}
          />
        </div>
      )}
      {!isMobile && (
        <div className="w-[300px] h-[calc(97dvh)] fixed flex flex-col items-center mb-4 p-2 gap-4">
          {/* <ConnectKitButton /> */}
          <Filter
            setSelectedEmblem={setSelectedEmblem}
            selectedEmblem={selectedEmblem}
            loading={!collections}
          />
          <Footer />
        </div>
      )}
      <div
        className={cn(
          "w-full flex flex-col gap-1",
          !isMobile && "ml-[300px] mt-2"
        )}
      >
        <FeedToolbar
          display={display}
          onClickDisplay={onClickDisplay}
          tokenId={tokenId}
          setTokenId={setTokenId}
        />
        {display === "grid" && (
          <CaseFeed collections={collections} selectedEmblem={selectedEmblem} />
        )}
        {display === "row" && (
          <RowFeed collections={collections} selectedEmblem={selectedEmblem} />
        )}
      </div>
    </div>
  );
}
