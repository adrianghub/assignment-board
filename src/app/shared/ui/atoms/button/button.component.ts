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
import { PossibleButtonSizes } from './button.config';

@Component({
  standalone: true,
  selector: 'koia-button',
  template: ` <button
    mat-button
    class="button"
    color="accent"
    [color]="type"
    [class]="type"
    [style]="cssVariables"
    [disabled]="disabled"
    (click)="onClick()"
  >
    <ng-content />
  </button>`,
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled = false;

  @Output()
  buttonClicked = new EventEmitter<Event>();

  protected get cssVariables(): string {
    return `
      --fontSize: ${PossibleButtonSizes[this.size].fontSize};
      --padding: ${PossibleButtonSizes[this.size].padding};
    `;
  }

  protected onClick(): void {
    this.buttonClicked.emit();
  }
}
