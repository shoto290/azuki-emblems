import { useBreakpoints } from "@/hooks/useBreakpoints";
import Token from "./Token";
import TokenSkeleton from "./TokenSkeleton";
import { Emblem } from "@/lib/emblems/types";
import { SearchTokensResponse } from "@/lib/services/token/types";
import { cn } from "@/lib/utils";

interface CaseFeedProps {
  collections: SearchTokensResponse | null;
  selectedEmblem: Emblem;
}

export default function CaseFeed({
  collections,
  selectedEmblem,
}: CaseFeedProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-2">
      {!collections && [...Array(20)].map((_, i) => <TokenSkeleton key={i} />)}
      {collections?.tokens.map((collection) => (
        <Token
          key={collection.token.tokenId}
          token={collection.token}
          market={collection.market}
          points={selectedEmblem.points}
          emblemsType={selectedEmblem.type}
        />
      ))}
      {collections?.continuation && <TokenSkeleton />}
    </div>
  );
}
