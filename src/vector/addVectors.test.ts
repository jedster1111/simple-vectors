import { Vector, VectorPosition } from './types';
import { addVectors } from './addVectors';
import { createVector } from './createVector';

describe('addVectors', () => {
  it.each<[Vector, Vector, VectorPosition]>([
    [createVector(1, 2), createVector(4, 6), createVector(5, 8)],
    [createVector(-2, -3), createVector(2, 6), createVector(0, 3)],
    [createVector(0, 0), createVector(0, 0), createVector(0, 0)],
  ])('%s added to %s should result in %s', (a, b, result) => {
    expect(addVectors(a, b)).toMatchObject({ x: result.x, y: result.y });
  });
});
