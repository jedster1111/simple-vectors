import { createPosition } from './createPosition';

describe('createPosition', () => {
  it('should return 1,2 if the string "1,2" is provided', () => {
    expect(createPosition('1,2')).toEqual({ x: 1, y: 2 });
  });

  it('should return 1,2 if the numbers 1 and 2 are provided', () => {
    expect(createPosition(1, 2)).toEqual({ x: 1, y: 2 });
  });

  it('should throw an error if only one number is provided', () => {
    expect(() => (createPosition as jest.Mock)(1)).toThrow();
  });
});
