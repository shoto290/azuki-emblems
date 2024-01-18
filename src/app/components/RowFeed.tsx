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

interface RowFeedProps {
  collections: SearchTokensResponse | null;
  selectedEmblem: Emblem;
}

export default function RowFeed({ collections, selectedEmblem }: RowFeedProps) {
  const { isMobile } = useBreakpoints();

  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full">
          <TableHead className={cn(!isMobile && "w-[230px]")}>Tokens</TableHead>
          <TableHead className={cn(!isMobile && "w-[120px]")}>Points</TableHead>
          <TableHead className={cn(isMobile && "text-right")}>
            Buy now
          </TableHead>
          {!isMobile && <TableHead className="text-right">Owner</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {collections?.tokens.map((collection) => (
          <RowToken
            key={collection.token.tokenId}
            token={collection.token}
            market={collection.market}
            points={selectedEmblem.points}
            emblemsType={selectedEmblem.type}
          />
        ))}
      </TableBody>
    </Table>
  );
}
