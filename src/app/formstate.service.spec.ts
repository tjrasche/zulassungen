import { TestBed } from '@angular/core/testing';

import { FormStateService } from './form-state.service';

describe('FormstateService', () => {
  let service: FormStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
