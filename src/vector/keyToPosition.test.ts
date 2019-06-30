import { keyToPosition } from './keyToPosition';

describe('keyToPosition', () => {
  it('should return correct vector for string "2,3"', () => {
    expect(keyToPosition('2,3')).toMatchObject({ x: 2, y: 3 });
  });

  it('should throw an error if an incorrectly formatted string is provided', () => {
    expect(() => keyToPosition('whoops')).toThrow();
  });
});
