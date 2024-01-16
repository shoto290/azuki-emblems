import { Point } from "@/lib/emblems/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { TooltipPoints } from "./TooltipPoints";

interface PointsBadgeProps {
  points: Point[];
}

export default function EmblemPointsBadge({ points }: PointsBadgeProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip delayDuration={500}>
        <TooltipTrigger>
          <Badge variant="default">?</Badge>
        </TooltipTrigger>
        <TooltipContent className="flex flex-col gap-3">
          <TooltipPoints points={points} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
