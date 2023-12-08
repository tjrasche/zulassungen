import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IParsedTreeData } from '../types/tree-data.interface';

@Component({
  selector: 'app-single-form-element',
  templateUrl: './single-form-element.component.html',
  styleUrls: ['./single-form-element.component.scss'],
})
export class SingleFormElementComponent {
  @Input() question: IParsedTreeData | undefined;
  @Output() idSelected = new EventEmitter<string>();
}
