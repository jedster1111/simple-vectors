import { VectorPosition } from './types';

export function areVectorsEqual(a: VectorPosition, b: VectorPosition): boolean {
  const { x: ax, y: ay } = a;
  const { x: bx, y: by } = b;
  return ax === bx && ay === by;
}
