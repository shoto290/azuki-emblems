"use client";

import useCollections from "../hooks/useCollections";
import Filter from "./Filter";
import Token from "./Token";
import TokenSkeleton from "./TokenSkeleton";
import Footer from "./Footer";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "@/lib/ui/components/ui/button";

export default function Feed() {
  const { collections, setSelectedEmblem, selectedEmblem } = useCollections();
  const { isMobile } = useBreakpoints();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [selectedEmblem]);

  return (
    <div className={cn("flex flex-col md:flex-row gap-1")}>
      {isMobile && (
        <div className="fixed bottom-0 left-0 p-4 w-full z-20 bg-primary/10 backdrop-blur-xl rounded-t-5xl">
          <Button
            variant="secondary"
            className=" w-full flex gap-1"
            onClick={() => setOpen(!open)}
          >
            <img className="h-6 w-6" src={selectedEmblem.icon} />
            {selectedEmblem.name}
          </Button>
        </div>
      )}
      {isMobile && open && (
        <div className="absolute left-0 w-full h-[calc(94dvh)] flex flex-col items-center p-2 z-10">
          {/* <ConnectKitButton /> */}
          <Filter
            setSelectedEmblem={setSelectedEmblem}
            selectedEmblem={selectedEmblem}
            loading={!collections}
          />
          <Footer />
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
          "w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          !isMobile && "ml-[300px]"
        )}
      >
        {!collections &&
          [...Array(20)].map((_, i) => <TokenSkeleton key={i} />)}
        {collections?.map((collection) => (
          <Token
            key={collection.token.tokenId}
            token={collection.token}
            market={collection.market}
            points={selectedEmblem.points}
            emblemsType={selectedEmblem.type}
          />
        ))}
      </div>
    </div>
  );
}
