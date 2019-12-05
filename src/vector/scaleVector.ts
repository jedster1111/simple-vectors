import { Vector, VectorPosition } from './types';
import { createVector } from './createVector';

export function scaleVector(vector: VectorPosition, scale: number): Vector {
  return createVector(vector.x * scale, vector.y * scale);
}
