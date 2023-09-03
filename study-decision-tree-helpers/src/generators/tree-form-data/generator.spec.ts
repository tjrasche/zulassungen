import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { readProjectConfiguration, Tree } from '@nx/devkit';

import { treeFormDataGenerator } from './generator';
import { TreeFormDataGeneratorSchema } from './schema';

describe('tree-form-data generator', () => {
  let tree: Tree;
  const options: TreeFormDataGeneratorSchema = { filePath: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await treeFormDataGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
