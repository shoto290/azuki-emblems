import { Filter } from "@/types";
import CollectionFilter from "./CollectionFilter";

interface FilterProps {
  selectedBadge: Filter;
  setSelectedBadge: (filter: Filter) => void;
}

export default function Filter({
  selectedBadge,
  setSelectedBadge,
}: FilterProps) {
  return (
    <div>
      <CollectionFilter
        selectedBadge={selectedBadge}
        setSelectedBadge={setSelectedBadge}
      />
    </div>
  );
}
