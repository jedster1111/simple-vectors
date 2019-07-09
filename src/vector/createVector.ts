import { Vector, VectorPosition } from './types';
import { addVectors } from './addVectors';
import { areVectorsEqual } from './areVectorsEqual';
import { calculateVectorArea } from './calculateVectorArea';
import { createPosition } from './createPosition';
import { isVector } from './isVector';
import { vectorToKey } from './vectorToKey';
import isNumber from 'is-number';

export function createVector(key: string): Vector;
export function createVector(position: VectorPosition): Vector;
export function createVector(x: number, y: number): Vector;
export function createVector(keyOrPosOrX: string | VectorPosition | number, y?: number): Vector {
  const position: VectorPosition = isVector(keyOrPosOrX) ? keyOrPosOrX : getPosition(keyOrPosOrX, y);

  const result: Vector = {
    x: position.x,
    y: position.y,
    toString: () => vectorToKey(position),
    add: vectorToAdd => addVectors(position, vectorToAdd),
    isEqual: vectorToCompare => areVectorsEqual(position, vectorToCompare),
    getArea: () => calculateVectorArea(position),
  };
  return result;
}

function getPosition(xOrKey: string | number, y: number | undefined): VectorPosition {
  let position: VectorPosition;
  if (typeof xOrKey === 'string' && y === undefined) {
    position = createPosition(xOrKey);
  } else if (isNumber(xOrKey) && isNumber(y)) {
    position = createPosition(+xOrKey, y);
  } else {
    throw new Error(`
  Parameters don't meet type requirements.
  Should either be two numbers, or a single string in the format "x,y".
  Instead received "${xOrKey}" & "${y}".
    `);
  }
  return position;
}
