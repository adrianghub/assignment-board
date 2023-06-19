import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimeRange } from 'src/app/modules/board-room/meetings/models/meetings.mode';
import { TimePickerComponent } from '../../atoms/time-picker/time-picker.component';

@Component({
  standalone: true,
  selector: 'koia-time-picker-range',
  template: ` <koia-time-picker
      [startTime]="initialTimeRange.start!"
      (changed)="changed.emit({ start: $event })"
    ></koia-time-picker>

    <span class="separator"></span>

    <koia-time-picker
      [startTime]="initialTimeRange.end!"
      (changed)="changed.emit({ end: $event })"
    ></koia-time-picker>`,
  styleUrls: ['./time-picker-range.component.scss'],
  imports: [TimePickerComponent],
})
export class TimePickerRangeComponent {
  @Input() initialTimeRange!: TimeRange;

  @Output() changed = new EventEmitter<TimeRange>();
}
