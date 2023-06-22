import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetingPage } from './new-meeting.page';

describe('NewMeetingPage', () => {
  let component: NewMeetingPage;
  let fixture: ComponentFixture<NewMeetingPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMeetingPage]
    });
    fixture = TestBed.createComponent(NewMeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
