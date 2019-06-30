import { vectorToKey } from './vectorToKey';

describe('vectorToKey', () => {
  it('should return "1,2" for the vector 1,2', () => {
    expect(vectorToKey({ x: 1, y: 2 })).toBe('1,2');
  });
});
