import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { convertTime } from 'src/app/shared/utils/date.utils';

@Component({
  standalone: true,
  selector: 'koia-time-picker',
  template: ` <mat-form-field
      class="form-field"
      appearance="outline"
      (click)="picker.open()"
      ><input
        [ngxTimepicker]="picker"
        [formControl]="timeControl"
        matInput
        class="input"
        readonly
        placeholder="HH:mm"
    /></mat-form-field>
    <ngx-material-timepicker
      #picker
      (timeChanged)="emitChangedTime($event)"
    />`,
  styleUrls: ['./time-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgxMaterialTimepickerModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
})
export class TimePickerComponent implements OnInit {
  @Input() startTime!: string;

  @Output() changed = new EventEmitter<string>();

  timeControl = new FormControl<string | null>(null, { nonNullable: true });

  ngOnInit() {
    this.timeControl.setValue(this.startTime);
  }

  emitChangedTime($event: string) {
    this.changed.emit(convertTime($event));
  }
}
