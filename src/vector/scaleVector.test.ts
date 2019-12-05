import { Vector, VectorPosition } from './types';
import { createVector } from './createVector';
import { scaleVector } from './scaleVector';

function assertScaleVector(vector: Vector, scale: number, result: VectorPosition): void {
  expect(scaleVector(vector, scale)).toMatchObject(result);
}

describe('scaleVector', () => {
  it('should return the same vector if the scale is 1', () => {
    assertScaleVector(createVector(1, 2), 1, { x: 1, y: 2 });
  });

  it('should return a vector with x and y being 0 if the scale is 0', () => {
    assertScaleVector(createVector(1, 2), 0, { x: 0, y: 0 });
  });

  it('should scale x and y correctly', () => {
    assertScaleVector(createVector(1, 2), 4, { x: 4, y: 8 });
  });

  it('should handle negative scaling', () => {
    assertScaleVector(createVector(-3, 5), -3, { x: 9, y: -15 });
  });

  it('should handle decimal scaling', () => {
    assertScaleVector(createVector(10, 4), 0.5, { x: 5, y: 2 });
  });
});
