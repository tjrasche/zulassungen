import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleFormElementComponent } from './single-form-element.component';

describe('SingleFormElementComponent', () => {
  let component: SingleFormElementComponent;
  let fixture: ComponentFixture<SingleFormElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleFormElementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SingleFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
