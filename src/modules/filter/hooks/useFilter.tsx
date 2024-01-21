import { EmblemId, EmblemType } from "@/lib/emblems/enums";
import { Emblem } from "@/lib/emblems/types";
import { useEffect, useState } from "react";
import { baseEmblems } from "@/lib/emblems/constants";

export function useFilter() {
  const [favoriteEmblems, setFavoriteEmblems] = useState<
    EmblemId[] | undefined
  >();
  const [emblems, setEmblems] = useState<
    {
      type: EmblemType;
      emblems: Emblem[];
    }[]
  >(baseEmblems);

  useEffect(() => {
    const favoriteEmblems = localStorage.getItem("favoriteEmblems");
    if (favoriteEmblems) {
      setFavoriteEmblems(JSON.parse(favoriteEmblems));
    }
  }, []);

  useEffect(() => {
    if (favoriteEmblems) {
      localStorage.setItem("favoriteEmblems", JSON.stringify(favoriteEmblems));
    }

    const formattedEmblems = _formatEmblems();
    setEmblems(formattedEmblems);
  }, [favoriteEmblems]);

  function addFavoriteEmblem(emblemId: EmblemId) {
    setFavoriteEmblems((prev) => {
      return [...(prev || []), emblemId];
    });
  }

  function removeFavoriteEmblem(emblemId: EmblemId) {
    setFavoriteEmblems((prev) => {
      return (prev || []).filter((id) => id !== emblemId);
    });
  }

  function _formatEmblems(): {
    type: EmblemType;
    emblems: Emblem[];
  }[] {
    const baseFiltered = baseEmblems.map(({ emblems, type }) => ({
      type,
      emblems: emblems.filter(
        (emblem) => !(favoriteEmblems || []).includes(emblem.id)
      ),
    }));

    const favoriteEmblemsFiltered = baseEmblems.reduce(
      (prev, { emblems }) => {
        const filtered = emblems.filter((emblem) =>
          (favoriteEmblems || []).includes(emblem.id)
        );
        return {
          ...prev,
          emblems: [...prev.emblems, ...filtered],
        };
      },
      {
        type: EmblemType.FAVOURITES,
        emblems: [],
      }
    );

    return favoriteEmblemsFiltered.emblems.length > 0
      ? [favoriteEmblemsFiltered, ...baseFiltered]
      : baseFiltered;
  }

  return {
    emblems,
    favoriteEmblems,
    addFavoriteEmblem,
    removeFavoriteEmblem,
  };
}
