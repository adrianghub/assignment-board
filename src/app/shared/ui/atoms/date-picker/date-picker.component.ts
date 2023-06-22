import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { FeatherModule } from 'angular-feather';
import { ButtonComponent } from '../button/button.component';

@Component({
  standalone: true,
  selector: 'koia-date-picker',
  template: `
    <mat-form-field
      class="form-field"
      (click)="picker.open()"
      appearance="outline"
    >
      <mat-label>{{ label }}</mat-label>

      <input
        matInput
        [matDatepicker]="picker"
        (dateChange)="changed.emit($event)"
        [min]="min"
        [max]="max"
        [formControl]="control"
        class="input"
        readonly
      />

      <mat-hint>{{ hint }}</mat-hint>

      <mat-datepicker-toggle matIconSuffix [for]="picker">
        <i-feather matDatepickerToggleIcon name="calendar" />

        <mat-datepicker-toggle
          matIconSuffix
          [for]="picker"
        ></mat-datepicker-toggle>
      </mat-datepicker-toggle>

      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `,
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    FeatherModule,
    TranslateModule,
  ],
})
export class DatePickerComponent {
  @Input({ required: true }) label!: string;
  @Input() hint?: string;
  @Input() min?: Date;
  @Input() max?: Date;
  @Input() startDate?: Date;
  @Input() control!: FormControl<Date | null>;

  @Output() changed = new EventEmitter<MatDatepickerInputEvent<Date, Date>>();
}
