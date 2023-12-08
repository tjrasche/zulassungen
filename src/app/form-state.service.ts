import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { treeData } from './generated/tree-data';
import { IFlatTree, IParsedTreeData } from './types/tree-data.interface';

@Injectable({
  providedIn: 'root',
})
export class FormStateService {
  formTree: IFlatTree<IParsedTreeData> = treeData;
  selectedIds$ = new BehaviorSubject<string[]>([this.formTree.rootId]);
  currentForm$ = this.selectedIds$.pipe(
    map((id) => {
      // map ids to values
      const treeElements = id.map((val) => this.formTree.entries[val]);

      // enrich with child elements

      return treeElements.map((value) => ({
        ...value,
        options: value.childIds.map(
          (childId) => this.formTree.entries[childId]
        ),
      }));
    })
  );

  newIdSelected(id: string) {
    this.selectedIds$.next([...this.selectedIds$.value, id]);
  }

  constructor() {}
}
