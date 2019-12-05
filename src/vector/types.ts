export interface Vector extends VectorPosition {
  toString: () => string;
  add: (vectorToAdd: VectorPosition) => Vector;
  scale: (scale: number) => Vector;
  isEqual: (vectorToCompare: VectorPosition) => boolean;
  getArea: () => number;
}

export interface VectorPosition {
  readonly x: number;
  readonly y: number;
}
