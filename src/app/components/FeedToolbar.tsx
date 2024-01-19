import { Button } from "@/lib/ui/components/ui/button";
import { Input } from "@/lib/ui/components/ui/input";
import { LayoutGrid, ListIcon } from "lucide-react";

interface FeedToolbarProps {
  display: "row" | "grid";
  onClickDisplay: () => void;
  tokenId: string;
  setTokenId: (tokenId: string) => void;
}

export function FeedToolbar({
  display,
  onClickDisplay,
  tokenId,
  setTokenId,
}: FeedToolbarProps) {
  return (
    <div className="w-full flex gap-2">
      <Button variant="outline" className="flex gap-1" onClick={onClickDisplay}>
        {display === "row" ? <LayoutGrid /> : <ListIcon />}
      </Button>
      <Input
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        className="border-primary"
        placeholder="Search by token id"
      />
    </div>
  );
}
