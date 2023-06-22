import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMeetingsPage } from './board-meetings.page';

describe('BoardMeetingsPage', () => {
  let component: BoardMeetingsPage;
  let fixture: ComponentFixture<BoardMeetingsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardMeetingsPage]
    });
    fixture = TestBed.createComponent(BoardMeetingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
