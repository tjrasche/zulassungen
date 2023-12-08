import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { IParsedTreeData } from '../types/tree-data.interface';

@Component({
  selector: 'app-single-form-element',
  templateUrl: './single-form-element.component.html',
  styleUrls: ['./single-form-element.component.scss'],
})
export class SingleFormElementComponent implements AfterViewInit {
  @Input() question: IParsedTreeData | undefined;
  @Output() idSelected = new EventEmitter<string>();
  constructor(private ref: ElementRef) {}
  ngAfterViewInit(): void {
    const element = this.ref.nativeElement;
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
