import { calculateVectorArea } from './calculateVectorArea';
import { createVector } from './createVector';

describe('calculateVectorArea', () => {
  it('the area of 2,3 should be 6', () => {
    expect(calculateVectorArea(createVector(2, 3))).toBe(6);
  });
});
