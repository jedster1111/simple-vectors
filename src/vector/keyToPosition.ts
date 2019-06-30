import { VectorPosition } from './types';
import isNumber from 'is-number';

export function keyToPosition(str: string): VectorPosition {
  const [x, y] = str.split(',');
  const noX = Number(x);
  const noY = Number(y);
  if (!isNumber(noX) || !isNumber(noY)) {
    throw new Error(`
  Tried to create vector with an incorrectly formatted key.
  Received \"${str}\" which does not match format \"x,y\".
  An example of a correctly formatted key is \"0,2\".
      `);
  }
  return { x: noX, y: noY };
}
