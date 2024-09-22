import { Point } from "@/lib/emblems/types";
import { Token } from "@/lib/services/token/types";
import { Badge } from "@/lib/ui/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/lib/ui/components/ui/tooltip";
import { Collection, EmblemType } from "@/lib/emblems/enums";
import { cn } from "@/lib/utils";

interface TokenBadgeProps {
  token: Token;
  points: Point[];
  emblemsType: EmblemType;
}

export default function GreenBeanChecker({ token }: TokenBadgeProps) {
  const isGreenBeanClaimed = token.isGreenBeanClaimed;

  // only show the green bean badge if it is Azuki OG collection. need "toLowerCase" comparison
  // since in token contract the value is "0xed5af388653567af2f388e6224dc7c4b3241c544"
  // and in Collection.Azuki, the value is "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
  if (token.contract.toLowerCase() !== Collection.AZUKI.toLowerCase()) {
    return <></>;
  }

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Badge
            className={cn(
              !isGreenBeanClaimed && "bg-[#74BBB3] hover:bg-[#619d96]"
            )}
            variant="secondary"
          >
            <p className="flex flex-row gap-1">
              {isGreenBeanClaimed ? "Claimed" : "Available"}
            </p>
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="text-start flex flex-col gap-3">
          {isGreenBeanClaimed ? "Green bean claimed" : "Green bean not claimed"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
