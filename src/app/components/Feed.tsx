"use client";

import useCollections from "../hooks/useCollections";
import Filter from "./Filter";
import Token from "./Token";
import TokenSkeleton from "./TokenSkeleton";

export default function Feed() {
  const { collections, setSelectedBadge, selectedBadge } = useCollections();

  return (
    <div>
      <div className="w-full flex flex-col items-center mb-4">
        <Filter
          setSelectedBadge={setSelectedBadge}
          selectedBadge={selectedBadge}
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
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
