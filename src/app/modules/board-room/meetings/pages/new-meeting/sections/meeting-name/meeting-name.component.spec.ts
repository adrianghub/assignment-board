import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingNameComponent } from './meeting-name.component';

describe('MeetingNameComponent', () => {
  let component: MeetingNameComponent;
  let fixture: ComponentFixture<MeetingNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingNameComponent]
    });
    fixture = TestBed.createComponent(MeetingNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
