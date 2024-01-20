import { Emblem, Point } from "@/lib/emblems/types";
import { Token } from "../token/types";
import { emblems } from "@/lib/emblems/constants";
import { EmblemType } from "@/lib/emblems/enums";

export function getValidPoints(token: Token, type: EmblemType) {
  const emblems = _getEmblemsByType(type);
  const points = emblems.reduce((acc, emblem) => {
    return [...acc, ...emblem.points];
  }, [] as Point[]);

  return points.reduce((acc, point) => {
    if (!point.conditions) return acc;
    if (point.conditions.length === 0) return [...acc, point];

    let validCondition = 0;
    for (const condition of point.conditions) {
      if (condition.attributes) {
        let validAttribute = true;
        for (const attribute of condition.attributes) {
          if (
            !token.attributes.find((tokenAttribute) => {
              if (tokenAttribute.key === attribute.trait_type) {
                if (tokenAttribute.value === attribute.value) {
                  return true;
                }
              }
              return false;
            })
          ) {
            validAttribute = false;
            break;
          }
        }
        if (validAttribute) {
          validCondition++;
        }
      }

      if (condition.tokenId) {
        if (Number(token.tokenId) === condition.tokenId) {
          validCondition++;
        }
      }
    }

    if (validCondition >= 1) {
      return [
        ...acc,
        {
          ...point,
          value: point.multiples
            ? _getPointWithMultiple(
                point.value,
                point.multiples,
                validCondition
              )
            : point.value,
          multiples: undefined,
          description: `${point.multiples ? validCondition : ""} ${
            point.description
          }`,
        },
      ];
    }
    return acc;
  }, [] as Point[]);
}

function _getEmblemsByType(type: EmblemType): Emblem[] {
  return emblems.find((emblem) => emblem.type === type)?.emblems || [];
}

function _getPointWithMultiple(
  value: number,
  multiples: number[],
  validCondition: number
) {
  if (validCondition === 1) {
    return value;
  }
  return multiples[validCondition - 2];
}
