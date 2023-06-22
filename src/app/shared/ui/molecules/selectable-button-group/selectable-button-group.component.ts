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
    <ng-container *ngFor="let item of items">
      <koia-button
        type="primary"
        [label]="translationKey + '.' + item.key | translate"
        [active]="item.active"
        (clicked)="toggleActive(item)"
        class="selectable-button"
      />
    </ng-container>
  `,
  styleUrls: ['./selectable-button-group.component.scss'],
  imports: [CommonModule, ButtonComponent, TranslateModule],
})
export class SelectableButtonGroupComponent {
  @Input() items: SelectableButton[] = [];
  @Input() translationKey!: string;

  @Output() selected = new EventEmitter<SelectableButton>();

  toggleActive(item: SelectableButton): void {
    this.items.forEach((i) => (i.active = i === item ? true : false));

    this.selected.emit(item);
  }
}
