import { Emblem, Point } from "@/lib/emblems/types";
import { Attribute, Token } from "../token/types";
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
      validCondition += _checkAttributes(condition.attributes, token);
      validCondition += _checkTokenId(condition.tokenId, token);
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

function _checkAttributes(
  attributes: Attribute[] | undefined,
  token: Token
): number {
  let validCondition = 0;

  if (attributes) {
    let validAttribute = true;

    for (const attribute of attributes) {
      if (!_isValidAttribute(attribute, token)) {
        validAttribute = false;
        break;
      }
    }
    if (validAttribute) {
      validCondition++;
    }
  }

  return validCondition;
}

function _escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function _isValidAttribute(attribute: Attribute, token: Token): boolean {
  return !!token.attributes.find((tokenAttribute) => {
    const tokenTraitType = tokenAttribute.key.toLowerCase();
    const tokenValue = tokenAttribute.value.toLowerCase();
    const conditionTraitType = attribute.trait_type.toLowerCase();
    const conditionValue = attribute.value.toLowerCase();

    if (tokenTraitType === conditionTraitType) {
      const escapedConditionValue = _escapeRegExp(conditionValue);
      const regex = new RegExp(`\\b${escapedConditionValue}\\b`, "i");
      if (regex.test(tokenValue) || tokenValue === conditionValue) {
        return true;
      }
    }
    return false;
  });
}

function _checkTokenId(tokenId: number | undefined, token: Token): number {
  if (tokenId) {
    if (Number(token.tokenId) === tokenId) {
      return 1;
    }
  }
  return 0;
}
