import { VectorPosition } from './types';

/**
 * Returns true if either of the dimension (x or y) are smaller than the vector's dimensions that's being compared.
 */
export const isVectorSmallerThan = (vectorToCheck: VectorPosition, vectorToCompare: VectorPosition): boolean =>
  vectorToCheck.x < vectorToCompare.x || vectorToCheck.y < vectorToCompare.y;
