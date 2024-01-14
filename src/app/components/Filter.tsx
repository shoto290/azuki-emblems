import { Filter } from "@/lib/services/token/types";
import CollectionFilter from "./CollectionFilter";
import { Emblem } from "@/lib/emblems/types";

interface FilterProps {
  selectedEmblem: Emblem;
  setSelectedEmblem: (emblem: Emblem) => void;
}

export default function Filter({
  selectedEmblem,
  setSelectedEmblem,
}: FilterProps) {
  return (
    <div>
      <CollectionFilter
        selectedEmblem={selectedEmblem}
        setSelectedEmblem={setSelectedEmblem}
      />
    </div>
  );
}
