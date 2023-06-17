import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import type { ButtonSize, ButtonType } from './button.config';
import { buttonSizes } from './button.config';

@Component({
  standalone: true,
  selector: 'koia-button',
  template: ` <button
    mat-button
    class="button"
    [class.active]="active"
    [color]="type"
    [style]="cssVariables"
    [disabled]="disabled"
    (click)="onClick()"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() label?: string;
  @Input() disabled = false;
  @Input() active = false;

  @Output()
  clicked = new EventEmitter<Event>();

  protected get cssVariables(): string {
    return `
      --fontSize: ${buttonSizes[this.size].fontSize};
      --padding: ${buttonSizes[this.size].padding};
    `;
  }

  protected onClick(): void {
    this.clicked.emit();
  }
}
