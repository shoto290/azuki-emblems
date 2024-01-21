"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/lib/ui/components/ui/command";
import { Emblem } from "@/lib/emblems/types";

import EmblemPointsBadge from "../../../app/components/EmblemPointsBadge";
import { useFilter } from "../hooks/useFilter";
import { EmblemType } from "@/lib/emblems/enums";
import { cn } from "@/lib/utils";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

interface CollectionFilterProps {
  selectedEmblem: Emblem;
  setSelectedEmblem: (emblem: Emblem) => void;
  loading: boolean;
}

export default function Filter({
  selectedEmblem,
  setSelectedEmblem,
  loading,
}: CollectionFilterProps) {
  const { emblems, addFavoriteEmblem, removeFavoriteEmblem } = useFilter();

  return (
    <Command>
      <CommandInput placeholder="Search emblem..." className="h-9" />
      <CommandEmpty>No emblem found.</CommandEmpty>
      <div className="overflow-auto">
        {emblems.map(({ emblems, type }) => (
          <CommandGroup className="" heading={type} key={type}>
            {emblems.map((emblem) => (
              <CommandItem
                value={emblem.name}
                key={emblem.name}
                onSelect={() => {
                  if (loading) return;
                  setSelectedEmblem(emblem);
                }}
                className={cn(
                  "flex gap-3 p-2",
                  selectedEmblem.name === emblem.name ? "bg-primary" : ""
                )}
              >
                {emblem.icon && (
                  <img
                    src={emblem.icon}
                    alt={emblem.name}
                    height={40}
                    width={40}
                  />
                )}
                <span className="flex items-center gap-2 font-bold text-stone-200">
                  {emblem.name.toUpperCase()}
                  {emblem.points && (
                    <EmblemPointsBadge points={emblem.points} />
                  )}
                </span>
                {type === EmblemType.FAVORITE ? (
                  <StarFilledIcon
                    onClick={() => {
                      removeFavoriteEmblem(emblem.id);
                    }}
                    className="h-4 w-4 ml-auto mr-2 text-yellow-500 hover:text-yellow-300 hover:cursor-pointer"
                  />
                ) : (
                  <StarIcon
                    onClick={() => {
                      addFavoriteEmblem(emblem.id);
                    }}
                    className="h-4 w-4 ml-auto mr-2 text-secondary/20 hover:text-secondary/50 hover:cursor-pointer"
                  />
                )}
              </CommandItem>
            ))}
          </CommandGroup>
        ))}
      </div>
    </Command>
  );
}
