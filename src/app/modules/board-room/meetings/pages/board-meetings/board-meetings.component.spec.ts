import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMeetingsComponent } from './board-meetings.component';

describe('BoardMeetingsComponent', () => {
  let component: BoardMeetingsComponent;
  let fixture: ComponentFixture<BoardMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardMeetingsComponent]
    });
    fixture = TestBed.createComponent(BoardMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
