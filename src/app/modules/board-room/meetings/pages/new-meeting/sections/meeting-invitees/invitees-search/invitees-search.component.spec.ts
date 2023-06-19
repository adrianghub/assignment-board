import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteesSearchComponent } from './invitees-search.component';

describe('InviteesSearchComponent', () => {
  let component: InviteesSearchComponent;
  let fixture: ComponentFixture<InviteesSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteesSearchComponent]
    });
    fixture = TestBed.createComponent(InviteesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
