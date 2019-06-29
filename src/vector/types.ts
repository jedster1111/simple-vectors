export interface Vector {
  readonly position: VectorPosition;
  toString: () => string;
  add: (vectorToAdd: VectorPosition) => Vector;
  isEqual: (vectorToCompare: VectorPosition) => boolean;
  isSmaller: (vectorToCompare: VectorPosition) => boolean;
  getArea: () => number;
}

export interface VectorPosition {
  readonly x: number;
  readonly y: number;
}
