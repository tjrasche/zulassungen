import { Component } from '@angular/core';
import { FormStateService } from '../form-state.service';

@Component({
  selector: 'app-dropdown-form',
  templateUrl: './dropdown-form.component.html',
  styleUrls: ['./dropdown-form.component.scss'],
})
export class DropdownFormComponent {
  constructor(private formStateService: FormStateService) {}
  currentForm$ = this.formStateService.currentForm$;

  idSelected(id: string) {
    this.formStateService.newIdSelected(id);
  }
}
