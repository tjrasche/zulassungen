import { Tree } from '@nx/devkit';
import * as fs from 'fs';
import * as YAML from 'yaml';

import * as path from 'path';
import { TreeFormDataGeneratorSchema } from './schema';

export async function treeFormDataGenerator(
  tree: Tree,
  options: TreeFormDataGeneratorSchema
) {
  const resolvedPath = path.resolve(options.filePath);
  const file = fs.readFileSync(resolvedPath, 'utf8');
  const yaml = YAML.parse(file);
  tree.write(
    'src/app/generated/tree-data.ts',
    `export const treeData = ${JSON.stringify(yaml)}`
  );
}

export default treeFormDataGenerator;
