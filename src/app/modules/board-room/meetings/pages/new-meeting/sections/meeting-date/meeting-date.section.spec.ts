import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingDateSection } from './meeting-date.section';

describe('MeetingDateSection', () => {
  let component: MeetingDateSection;
  let fixture: ComponentFixture<MeetingDateSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingDateSection]
    });
    fixture = TestBed.createComponent(MeetingDateSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
