import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInviteesSection } from './meeting-invitees.section';

describe('MeetingInviteesSection', () => {
  let component: MeetingInviteesSection;
  let fixture: ComponentFixture<MeetingInviteesSection>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingInviteesSection]
    });
    fixture = TestBed.createComponent(MeetingInviteesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
