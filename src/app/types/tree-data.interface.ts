export interface ITreeData {
  subtext?: string | undefined | null;
  headline?: string;
  text?: string;
  question?: string;
  resolution?: string;
}

export interface IRawTreeData extends ITreeData {
  options?: ITreeData[] | undefined | null;
}

export interface IParsedTreeData extends ITreeData {
  id: string;
  parentId: string | null;
  childIds: string[];
  options?: IParsedTreeData[];
}

export interface IDictionary<T> {
  [key: string]: T;
}

export interface IFlatTree<T> {
  rootId: string;
  entries: IDictionary<T>;
}
