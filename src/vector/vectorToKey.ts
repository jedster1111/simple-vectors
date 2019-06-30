import { VectorPosition } from './types';

export function vectorToKey(position: VectorPosition): string {
  return `${position.x},${position.y}`;
}
