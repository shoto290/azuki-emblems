"use client";

import useCollections from "../hooks/useCollections";
import Filter from "./Filter";
import Token from "./Token";
import TokenSkeleton from "./TokenSkeleton";

export default function Feed() {
  const { collections, setSelectedEmblem, selectedEmblem } = useCollections();

  return (
    <div className="flex gap-1">
      <div className="w-[300px] h-fit flex flex-col items-center mb-4 p-2">
        <Filter
          setSelectedEmblem={setSelectedEmblem}
          selectedEmblem={selectedEmblem}
        />
      </div>
      <div className="w-full grid grid-cols-1 xs:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {!collections &&
          [...Array(20)].map((_, i) => <TokenSkeleton key={i} />)}
        {collections?.map((collection) => (
          <Token
            key={collection.token.tokenId}
            token={collection.token}
            market={collection.market}
          />
        ))}
      </div>
    </div>
  );
}
