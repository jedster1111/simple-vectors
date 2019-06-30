import { areVectorsEqual } from './areVectorsEqual';
import { createVector } from './createVector';

describe('areVectorsEqual', () => {
  it('should return true if 2,3 is compared to 2,3', () => {
    expect(areVectorsEqual(createVector(2, 3), createVector(2, 3))).toBe(true);
  });

  it('should return false if 2,3 is compared to 3,4', () => {
    expect(areVectorsEqual(createVector(2, 3), createVector(3, 4))).toBe(false);
  });
});
