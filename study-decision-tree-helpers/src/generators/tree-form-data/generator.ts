import { Tree } from '@nx/devkit';
import * as fs from 'fs';
import * as YAML from 'yaml';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { TreeFormDataGeneratorSchema } from './schema';
import {
  IDictionary,
  IFlatTree,
  IParsedTreeData,
  IRawTreeData,
} from '../../../../src/app/types/tree-data.interface';

export async function treeFormDataGenerator(
  tree: Tree,
  options: TreeFormDataGeneratorSchema
) {
  const resolvedPath = path.resolve(options.filePath);
  const file = fs.readFileSync(resolvedPath, 'utf8');
  const yaml = YAML.parse(file) as IRawTreeData;

  // generate uuid of root element
  const rootId = uuidv4();
  const parsedTreeEntries: IDictionary<IParsedTreeData> = flattenEntries(
    yaml,
    rootId,
    undefined
  );

  const finalTree: IFlatTree<IParsedTreeData> = {
    rootId,
    entries: parsedTreeEntries,
  };

  tree.write(
    'src/app/generated/tree-data.ts',
    `export const treeData = ${JSON.stringify(finalTree)}`
  );
}

const flattenEntries = (
  root: IRawTreeData,
  rootId: string,
  parentId: string | undefined | null
): IDictionary<IParsedTreeData> => {
  let returnDict: IDictionary<IParsedTreeData> = {};
  const firstLevelEntries = root.options;

  let childIds: string[] = [];
  if (firstLevelEntries) {
    // only loop through child elements if they exist
    for (let option of firstLevelEntries) {
      const nestedRootId = uuidv4();
      childIds.push(nestedRootId);
      Object.assign(returnDict, flattenEntries(option, nestedRootId, rootId));
    }
  }
  delete root.options;
  returnDict[rootId] = {
    ...(root as IParsedTreeData),
    parentId: parentId ?? null,
    childIds: childIds,
    id: rootId,
  };
  return returnDict;
};

export default treeFormDataGenerator;
