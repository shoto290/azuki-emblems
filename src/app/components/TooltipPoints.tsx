import { Point } from "@/lib/emblems/types";

interface TooltipPointsProps {
  points: Point[];
}

export function TooltipPoints({ points }: TooltipPointsProps) {
  function getComponent(
    description: string,
    value: number,
    infinite: boolean | undefined
  ) {
    return (
      <div key={description}>
        <p className="font-bold">{description}</p>
        <p className="font-light">
          +{value} points {infinite && "each"}
        </p>
      </div>
    );
  }

  return (
    <>
      {points.map((point) => {
        if (point.multiples) {
          const points = point.multiples.map((multiple, index) =>
            getComponent(
              `${index + 2} ${point.description}`,
              multiple,
              point.infinite
            )
          );
          return [
            getComponent(`1 ${point.description}`, point.value, point.infinite),
            ...points,
          ];
        }
        return getComponent(point.description, point.value, point.infinite);
      })}
    </>
  );
}
