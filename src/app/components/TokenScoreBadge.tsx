import { Point } from "@/lib/emblems/types";
import { Token } from "@/lib/services/token/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { EmblemType } from "@/lib/emblems/enums";

interface TokenBadgeProps {
  token: Token;
  points: Point[];
  emblemsType: EmblemType;
}

export default function TokenScoreBadge({ token }: TokenBadgeProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Badge variant="accent">
            {token.points.gachaponRarityCount.reduce(
              (e, { count }) => e + count,
              0
            )}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="text-start flex flex-col gap-3">
          {token.points.gachaponRarityCount.map((point) => (
            <div
              className="flex flex-row  items-center gap-2"
              key={point.rarity}
            >
              <p className="font-bold">{point.rarity}</p>
              <p className="font-light">{point.count}</p>
            </div>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
