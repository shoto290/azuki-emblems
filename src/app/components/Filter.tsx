"use client";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/lib/ui/components/ui/command";
import { Emblem } from "@/lib/emblems/types";
import { emblems } from "@/lib/emblems/constants";
import { ChevronRightIcon } from "lucide-react";

import PointsBadge from "./PointsBadge";

interface CollectionFilterProps {
  selectedEmblem: Emblem;
  setSelectedEmblem: (emblem: Emblem) => void;
}

export default function Filter({
  selectedEmblem,
  setSelectedEmblem,
}: CollectionFilterProps) {
  return (
    <Command>
      <CommandInput placeholder="Search emblem..." className="h-9" />
      <CommandEmpty>No emblem found.</CommandEmpty>
      <CommandGroup className="overflow-auto">
        {emblems.map((emblem) => (
          <CommandItem
            value={emblem.name}
            key={emblem.name}
            onSelect={() => {
              setSelectedEmblem(emblem);
            }}
            className="flex gap-3 p-2"
          >
            {emblem.icon && (
              <img src={emblem.icon} alt={emblem.name} height={40} width={40} />
            )}
            <span className="flex items-center gap-2 font-bold text-stone-200">
              {emblem.name.toUpperCase()}
              {emblem.points && <PointsBadge points={emblem.points} />}
            </span>
            <ChevronRightIcon
              className={cn(
                "ml-auto h-4 w-4",
                selectedEmblem.name === emblem.name
                  ? "opacity-100"
                  : "opacity-0"
              )}
            />
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  );
}
