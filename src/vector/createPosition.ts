import { VectorPosition } from './types';
import { keyToVector } from './keyToVector';

export function createPosition(key: string): VectorPosition;
export function createPosition(x: number, y: number): VectorPosition;
export function createPosition(xOrKey: string | number, y?: number): VectorPosition {
  let position: VectorPosition;
  if (typeof xOrKey === 'string') {
    position = keyToVector(xOrKey).position;
  } else {
    if (y === undefined) {
      throw new Error(`
  Value for y received: "${y}".
  "${y}" is not a number`);
    }

    position = { x: xOrKey, y };
  }
  return position;
}
