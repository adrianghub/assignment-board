import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingTypesSection } from './meeting-types.section';

describe('MeetingTypesSection', () => {
  let component: MeetingTypesSection;
  let fixture: ComponentFixture<MeetingTypesSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingTypesSection],
    });
    fixture = TestBed.createComponent(MeetingTypesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
