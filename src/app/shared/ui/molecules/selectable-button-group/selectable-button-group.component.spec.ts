import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableButtonGroupComponent } from './selectable-button-group.component';

describe('SelectableButtonGroupComponent', () => {
  let component: SelectableButtonGroupComponent;
  let fixture: ComponentFixture<SelectableButtonGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectableButtonGroupComponent]
    });
    fixture = TestBed.createComponent(SelectableButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
