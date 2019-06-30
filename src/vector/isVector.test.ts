import { isVector } from './isVector';

describe('isVector', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  it.each<[any, boolean]>([
    ['s', false],
    [5, false],
    [undefined, false],
    [null, false],
    [[1, 's'], false],
    [{ x: 1 }, false],
    [{ y: 1 }, false],
    [{ x: NaN, y: 1 }, false],
    [{ x: 1, y: 1 }, true],
    [{ x: 1, y: 1, extra: 'extra' }, true],
  ])('checking if %o is a vector should return %s', (valueToCheck, result) => {
    expect(isVector(valueToCheck)).toBe(result);
  });
});
