import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingLocationSection } from './meeting-location.section';

describe('MeetingLocationSection', () => {
  let component: MeetingLocationSection;
  let fixture: ComponentFixture<MeetingLocationSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingLocationSection]
    });
    fixture = TestBed.createComponent(MeetingLocationSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
