import { VectorPosition } from './types';
import isNumber from 'is-number';

export function isVector(vector: unknown): vector is VectorPosition {
  if (typeof vector !== 'object') {
    return false;
  }

  if (vector === null) {
    return false;
  }

  if (!vector.hasOwnProperty('x') || !vector.hasOwnProperty('y')) {
    return false;
  }

  const { x, y } = vector as { x: unknown; y: unknown };
  if (isNumber(x) && isNumber(y)) {
    return true;
  }

  return false;
}
