import { Vector, VectorPosition } from './types';
import { createVector } from './createVector';

export function addVectors(a: VectorPosition, b: VectorPosition): Vector {
  const { x: ax, y: ay } = a;
  const { x: bx, y: by } = b;
  return createVector(ax + bx, ay + by);
}
