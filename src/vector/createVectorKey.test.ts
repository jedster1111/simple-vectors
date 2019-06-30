import { createVectorKey } from './createVectorKey';

describe('createVectorKey', () => {
  it('should return "1,2" if the numbers 1 and 2 are passed in', () => {
    expect(createVectorKey(1, 2)).toBe('1,2');
  });
});
