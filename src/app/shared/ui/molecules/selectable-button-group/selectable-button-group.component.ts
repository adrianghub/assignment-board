import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent } from '../../atoms/button/button.component';

interface SelectableButton {
  key: string;
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
        [label]="'newMeeting.type.' + item.key | translate"
        [active]="item.active"
        (clicked)="toggleActive(item)"
        class="selectable-button"
      />
    </ng-container>
  `,
  imports: [CommonModule, ButtonComponent, TranslateModule],
})
export class SelectableButtonGroupComponent {
  @Input() items: SelectableButton[] = [];

  @Output() toggled = new EventEmitter<SelectableButton>();

  toggleActive(item: SelectableButton): void {
    if (item.active === false) {
      item.active = !item.active;

      this.items.forEach((i) => {
        if (i.key !== item.key) {
          i.active = false;
        }
      });
    }

    this.toggled.emit(item);
  }
}
