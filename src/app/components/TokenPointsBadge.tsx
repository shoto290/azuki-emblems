import { Point } from "@/lib/emblems/types";
import { getValidPoints } from "@/lib/services/points/getValidPoints";
import { Token } from "@/lib/services/token/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { TooltipPoints } from "./TooltipPoints";
import { EmblemType } from "@/lib/emblems/enums";

interface TokenBadgeProps {
  token: Token;
  points: Point[];
  emblemsType: EmblemType;
}

export default function TokenPointsBadge({
  token,
  points,
  emblemsType,
}: TokenBadgeProps) {
  const validPoints = getValidPoints(token, emblemsType);
  const total = validPoints.reduce((acc, point) => acc + point.value, 0);

  if (total === 0) {
    return <></>;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Badge variant="secondary">+{total}</Badge>
        </TooltipTrigger>
        <TooltipContent className="text-start flex flex-col gap-3">
          <TooltipPoints points={validPoints} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
