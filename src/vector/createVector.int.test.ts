import { VectorPosition } from './types';
import { createVector } from './createVector';

describe('createVector', () => {
  describe('arguments', () => {
    it('should return the correct position when the argument is a key in the format "x,y"', () => {
      const vector = createVector('1,2');
      expect(vector).toMatchObject({ x: 1, y: 2 });
    });

    it('should return the correct position when the arguments are 2 numbers', () => {
      const vector = createVector(1, 2);
      expect(vector).toMatchObject({ x: 1, y: 2 });
    });

    it('should return the correct position when the argument is a PositionVector', () => {
      const vector = createVector({ x: 1, y: 2 });
      expect(vector).toMatchObject({ x: 1, y: 2 });
    });

    it('should throw an error when the argument is not in the correct format', () => {
      expect(() => (createVector as jest.Mock)(2)).toThrow();
    });
  });

  describe('the created vector', () => {
    const vector = createVector(1, 2);

    describe('toString', () => {
      it('should return its key representation in the format 1,2', () => {
        expect(vector.toString()).toBe('1,2');
      });
    });

    describe('add', () => {
      it('should add a vector to itself and return a new vector', () => {
        const vector2 = vector.add(createVector(3, 5));
        expect(vector2).toMatchObject({ x: 4, y: 7 });
      });
    });

    describe('scale', () => {
      it('should scale the vector and return a new vector', () => {
        const vector2 = vector.scale(5);
        expect(vector2).toMatchObject({ x: 5, y: 10 });
      });
    });

    describe.each<[VectorPosition, boolean]>([[createVector(1, 2), true], [createVector(6, 6), false]])(
      'isEqual',
      (vectorToCompare, result) => {
        it(`should return ${result} when the vector ${vectorToCompare} is compared with ${vector}`, () => {
          expect(vector.isEqual(vectorToCompare)).toBe(result);
        });
      },
    );

    describe('getArea', () => {
      it('should return the correct area for a vector', () => {
        expect(vector.getArea()).toBe(2);
      });
    });
  });
});
