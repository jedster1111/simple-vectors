import { Vector, VectorPosition } from './types';
import { addVectors } from './addVectors';
import { areVectorsEqual } from './areVectorsEqual';
import { calculateVectorArea } from './getVectorArea';
import { createPosition } from './createPosition';
import { isVectorSmallerThan } from './isVectorSmallerThan';
import { vectorToKey } from './vectorPositionToKey';

export function createVector(key: string): Vector;
export function createVector(x: number, y: number): Vector;
export function createVector(xOrKey: string | number, y?: number): Vector {
  const position: VectorPosition = getPosition(xOrKey, y);

  const result: Vector = {
    position,
    toString: () => vectorToKey(position),
    add: function(vectorToAdd) {
      return addVectors(position, vectorToAdd);
    },
    isEqual: function(vectorToCompare) {
      return areVectorsEqual(position, vectorToCompare);
    },
    isSmaller: function(vectorToCompare) {
      return isVectorSmallerThan(position, vectorToCompare);
    },
    getArea: function() {
      return calculateVectorArea(position);
    },
  };
  return result;
}

function getPosition(xOrKey: string | number, y: number | undefined): VectorPosition {
  let position: VectorPosition;
  if (typeof xOrKey === 'string' && y === undefined) {
    position = createPosition(xOrKey);
  } else if (typeof xOrKey === 'number' && y !== undefined) {
    position = createPosition(xOrKey, y);
  } else {
    throw new Error(`
  Parameters don't meet type requirements.
  Should either be two numbers, or a single string in the format "x-y".
  Instead received "${xOrKey}" & "${y}".    
    `);
  }
  return position;
}
