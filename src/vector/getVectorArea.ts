import { VectorPosition } from './types';

export function calculateVectorArea({ x, y }: VectorPosition): number {
  return x * y;
}
