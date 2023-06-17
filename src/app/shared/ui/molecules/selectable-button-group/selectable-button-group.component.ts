import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';

interface SelectableButton {
  label: string;
  active: boolean;
}

@Component({
  standalone: true,
  selector: 'koia-selectable-button-group',
  template: `
    <style>
      :host {
        display: flex;
        gap: 16px;
      }
    </style>

    <ng-container *ngFor="let item of items">
      <koia-button
        type="primary"
        [label]="item.label"
        [active]="item.active"
        (clicked)="toggleActive(item)"
        class="selectable-button"
      />
    </ng-container>
  `,
  imports: [CommonModule, ButtonComponent],
})
export class SelectableButtonGroupComponent {
  @Input() items: SelectableButton[] = [];

  toggleActive(item: SelectableButton): void {
    if (item.active === false) {
      item.active = !item.active;

      this.items.forEach((i) => {
        if (i.label !== item.label) {
          i.active = false;
        }
      });
    }
  }
}
