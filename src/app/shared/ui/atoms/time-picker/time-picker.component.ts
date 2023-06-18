import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { convertTime } from 'src/app/shared/utils/date.utils';

@Component({
  standalone: true,
  selector: 'koia-time-picker',
  template: ` <style>
      :host,
      .form-field,
      .input {
        cursor: pointer;
      }

      .form-field {
        max-width: 110px;
      }
    </style>

    <mat-form-field
      class="form-field"
      appearance="outline"
      (click)="picker.open()"
      ><input
        matInput
        [ngxTimepicker]="picker"
        class="input"
        readonly
        placeholder="HH:mm"
    /></mat-form-field>
    <ngx-material-timepicker
      #picker
      (timeChanged)="emitChangedTime($event)"
    />`,
  imports: [NgxMaterialTimepickerModule, MatInputModule],
})
export class TimePickerComponent {
  @Output() changed = new EventEmitter<string>();

  emitChangedTime($event: string) {
    this.changed.emit(convertTime($event));
  }
}
