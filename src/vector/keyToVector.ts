import { Vector } from './types';
import { createVector } from './createVector';

export function keyToVector(str: string): Vector {
  const [x, y] = str.split('-');
  const noX = Number(x);
  const noY = Number(y);
  if (isNaN(noX) || isNaN(noY)) {
    throw new Error(
      `
  Tried to create vector with an incorrectly formatted key.
  Received \"${str}\" which does not match format \"x-y\".
  An example of a correctly formatted key is \"0-2\".
      `,
    );
  }
  return createVector(noX, noY);
}
