import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteesListComponent } from './invitees-list.component';

describe('InviteesListComponent', () => {
  let component: InviteesListComponent;
  let fixture: ComponentFixture<InviteesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteesListComponent]
    });
    fixture = TestBed.createComponent(InviteesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
