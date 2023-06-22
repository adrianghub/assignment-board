import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingNameSection } from './meeting-name.section';

describe('MeetingNameSection', () => {
  let component: MeetingNameSection;
  let fixture: ComponentFixture<MeetingNameSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingNameSection]
    });
    fixture = TestBed.createComponent(MeetingNameSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
