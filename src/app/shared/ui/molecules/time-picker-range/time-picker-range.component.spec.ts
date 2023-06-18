import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerRangeComponent } from './time-picker-range.component';

describe('TimePickerRangeComponent', () => {
  let component: TimePickerRangeComponent;
  let fixture: ComponentFixture<TimePickerRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimePickerRangeComponent]
    });
    fixture = TestBed.createComponent(TimePickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
