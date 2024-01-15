import { Point } from "@/lib/emblems/types";
import { checkValidPoints } from "@/lib/services/points/checkValidPoints";
import { Token } from "@/lib/services/token/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";

interface TokenBadgeProps {
  token: Token;
  points: Point[];
}

export default function TokenPointsBadge({ token, points }: TokenBadgeProps) {
  const validPoints = checkValidPoints(token, points);
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
        <TooltipContent className="flex flex-col gap-3">
          {validPoints.map((point) => (
            <div key={point.description}>
              <p className="font-bold">{point.description}</p>
              <p className="font-light">
                +{point.value} points {point.infinite && "each"}
              </p>
            </div>
          ))}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
