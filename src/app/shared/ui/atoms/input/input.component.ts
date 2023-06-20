import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { IconsModule } from 'src/app/core/icons/icons.module';
import { ButtonComponent } from '../button/button.component';

type InputType = 'text';

@Component({
  standalone: true,
  selector: 'koia-input',
  template: `
    <style>
      :host,
      .form-field {
        width: 100%;
      }

      .wrapper {
        display: flex;
        align-items: center;
        position: relative;
      }

      .icon {
        margin: 0 8px;
      }

      .clear {
        position: absolute;
        right: -5px;
      }
    </style>

    <mat-form-field class="form-field" appearance="outline">
      <mat-label>{{ label }}</mat-label>

      <i-feather matPrefix *ngIf="icon" [name]="icon" class="icon"></i-feather>

      <div class="wrapper">
        <input
          matInput
          [type]="type"
          [formControl]="control"
          [placeholder]="placeholder ?? ''"
          [attr.aria-label]="label ?? ''"
        />

        <koia-button
          *ngIf="control.value"
          icon="x"
          size="small"
          class="clear"
          (clicked)="control.reset(); cleared.emit($event)"
        />
      </div>

      <mat-hint *ngIf="hint">{{ hint }}</mat-hint>

      <mat-error *ngIf="(control.errors | keyvalue)?.[0] as error">
        <span>{{ 'misc.validationError.' + error.key | translate }}</span>
      </mat-error>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TranslateModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    ButtonComponent,
    IconsModule,
  ],
})
export class InputComponent implements OnInit {
  @Input() type: InputType = 'text';
  @Input({ required: true }) control!: FormControl<string | null>;
  @Input() label?: string;
  @Input() icon?: string;
  @Input() placeholder?: string;
  @Input() hint?: string;

  @Output() changed = new EventEmitter<string | null>();
  @Output() cleared = new EventEmitter<Event>();

  ngOnInit() {
    this.control.valueChanges.subscribe((value) => {
      this.changed.emit(value);
    });
  }
}
