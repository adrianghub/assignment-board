import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTypesComponent } from './meeting-types.component';

describe('MeetingTypesComponent', () => {
  let component: MeetingTypesComponent;
  let fixture: ComponentFixture<MeetingTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingTypesComponent],
    });
    fixture = TestBed.createComponent(MeetingTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
