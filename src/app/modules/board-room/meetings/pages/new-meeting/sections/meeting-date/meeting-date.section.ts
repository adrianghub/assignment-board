import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  formatDate,
  getCurrentTime,
  getTimeInFuture,
} from 'src/app/shared/utils/date.utils';
import { TimeRange } from '../../../../models/meetings.mode';

@Component({
  selector: 'koia-meeting-date',
  template: `
    <koia-date-picker
      [label]="'newMeeting.section.meetingDate.label' | translate"
      [min]="min"
      (changed)="changeDate($event.value)"
      [control]="startDate"
    ></koia-date-picker>

    <koia-time-picker-range
      [initialTimeRange]="timeRange"
      (changed)="changeTime($event)"
    ></koia-time-picker-range>
  `,
  styleUrls: ['./meeting-date.section.scss'],
})
export class MeetingDateSection implements OnInit {
  @Output() dateChanged = new EventEmitter<string>();
  @Output() timeChanged = new EventEmitter<TimeRange>();

  startDate = new FormControl<Date | null>(null, { nonNullable: true });
  timeRange = { start: getCurrentTime(), end: getTimeInFuture(1, 'hour') };

  min = new Date();

  ngOnInit() {
    this.startDate.setValue(this.min);
  }

  changeDate(date: Date | null) {
    if (date) {
      this.dateChanged.emit(formatDate(date));
    }
  }

  changeTime(time: TimeRange) {
    this.timeChanged.emit({ ...time });
  }
}
