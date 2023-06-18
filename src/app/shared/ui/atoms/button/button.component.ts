import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconsModule } from 'src/app/core/icons/icons.module';
import type { ButtonSize, ButtonType } from './button.config';
import { buttonSizes, iconSizes } from './button.config';

@Component({
  standalone: true,
  selector: 'koia-button',
  template: ` <button
    mat-button
    class="button"
    [ngClass]="{ active: active, 'icon-only': !label }"
    [color]="type"
    [style]="buttonCssVariables"
    [disabled]="disabled"
    (click)="onClick()"
  >
    <i-feather *ngIf="icon" [name]="icon" [style]="iconCssVariables" />

    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, MatButtonModule, IconsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() label?: string;
  @Input() icon?: string;
  @Input() disabled = false;
  @Input() active = false;

  @Output()
  clicked = new EventEmitter<Event>();

  protected get buttonCssVariables(): string {
    if (this.label) {
      return `
      --fontSize: ${buttonSizes[this.size].fontSize};
      --padding: ${buttonSizes[this.size].padding};
    `;
    } else {
      return `
      --padding: ${iconSizes[this.size].padding};
    `;
    }
  }

  protected get iconCssVariables(): string {
    return `
      --iconWidth: ${iconSizes[this.size].iconWidth};
    `;
  }

  protected onClick(): void {
    this.clicked.emit();
  }
}
