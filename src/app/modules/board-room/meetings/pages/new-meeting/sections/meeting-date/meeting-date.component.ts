import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { formatDate } from 'src/app/shared/utils/date.utils';
import { TimeRange } from '../../../../models/meetings.mode';

@Component({
  selector: 'koia-meeting-date',
  template: `
    <style>
      :host {
        display: flex;
        gap: 16px;
        max-width: 160px;
      }
    </style>

    <koia-date-picker
      [label]="'newMeeting.section.meetingDate.label' | translate"
      [min]="min"
      (changed)="changeDate($event.value)"
      [control]="startDate"
    ></koia-date-picker>

    <koia-time-picker-range
      (changed)="changeTime($event)"
    ></koia-time-picker-range>
  `,
})
export class MeetingDateComponent implements OnInit {
  @Output() dateChanged = new EventEmitter<string>();
  @Output() timeChanged = new EventEmitter<TimeRange>();

  startDate = new FormControl<Date | null>(null, { nonNullable: true });
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
