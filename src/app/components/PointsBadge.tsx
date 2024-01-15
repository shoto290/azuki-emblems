import { Point } from "@/lib/emblems/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";

interface PointsBadgeProps {
  points: Point[];
}

export default function PointsBadge({ points }: PointsBadgeProps) {
  const total = points.reduce((acc, point) => acc + point.value, 0);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Badge variant="default">{total}</Badge>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col gap-3">
          {points.map((point) => (
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
