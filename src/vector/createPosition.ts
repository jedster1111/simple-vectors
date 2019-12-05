import { VectorPosition } from './types';
import { keyToPosition } from './keyToPosition';
import isNumber from 'is-number';

export function createPosition(key: string): VectorPosition;
export function createPosition(x: number, y: number): VectorPosition;
export function createPosition(xOrKey: string | number, y?: number): VectorPosition {
  let position: VectorPosition;
  if (typeof xOrKey === 'string') {
    position = keyToPosition(xOrKey);
  } else if (isNumber(xOrKey) && y !== undefined && isNumber(y)) {
    position = { x: xOrKey, y };
  } else {
    throw new Error(`Both x and y must be provided. Received: ${xOrKey}, ${y}`);
  }

  return position;
}
