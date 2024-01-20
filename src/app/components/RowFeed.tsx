import { Emblem } from "@/lib/emblems/types";
import { SearchTokensResponse } from "@/lib/services/token/types";
import RowToken from "./RowToken";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/lib/ui/components/ui/table";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import { cn } from "@/lib/utils";
import RowTokenSkeleton from "./RowTokenSkeleton";

interface RowFeedProps {
  collections: SearchTokensResponse | null;
  selectedEmblem: Emblem;
  isFetchingMore: boolean;
}

export default function RowFeed({
  collections,
  selectedEmblem,
  isFetchingMore,
}: RowFeedProps) {
  const { isMobile } = useBreakpoints();

  return (
    <Table className="mb-16">
      <TableHeader>
        <TableRow className={cn(isMobile ? "w-auto" : "w-full")}>
          <TableHead className={cn(!isMobile ? "w-[230px]" : "w-[200px]")}>
            Tokens
          </TableHead>
          <TableHead className="text-center">Points/Eth</TableHead>
          <TableHead>Buy now</TableHead>
          <TableHead className="text-center">Points</TableHead>
          {!isMobile && <TableHead className="text-right">Owner</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {!collections &&
          [...Array(20)].map((_, i) => <RowTokenSkeleton key={i} />)}
        {collections?.tokens.map((collection) => (
          <RowToken
            key={collection.token.tokenId}
            token={collection.token}
            market={collection.market}
            points={selectedEmblem.points}
            emblemsType={selectedEmblem.type}
          />
        ))}
        {isFetchingMore && collections?.continuation && <RowTokenSkeleton />}
      </TableBody>
    </Table>
  );
}
