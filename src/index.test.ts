import * as allExports from './index';

const exportsThatShouldExist = [
  'createVector',
  'createPosition',
  'addVectors',
  'scaleVector',
  'areVectorsEqual',
  'calculateVectorArea',
  'vectorToKey',
  'createVectorKey',
  'isVector',
];

describe('index', () => {
  it('should have the correct exports', () => {
    expect(exportsThatShouldExist.sort()).toEqual(Object.keys(allExports).sort());
  });
});
