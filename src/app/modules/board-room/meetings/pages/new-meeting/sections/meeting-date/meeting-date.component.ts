import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'koia-meeting-date',
  template: `
    <koia-date-picker
      [label]="'newMeeting.section.meetingDate.label' | translate"
      [min]="min"
      (changed)="changeDate($event.value)"
      [control]="startDate"
    ></koia-date-picker>
  `,
})
export class MeetingDateComponent implements OnInit {
  @Output() dateChanged = new EventEmitter<string>();

  startDate = new FormControl<Date | null>(null, { nonNullable: true });
  min = new Date();

  ngOnInit() {
    this.startDate.setValue(this.min);
  }

  changeDate(date: Date | null) {
    if (date) {
      this.dateChanged.emit(formatDate(date, 'yyyy-MM-dd', 'en-US'));
    }
  }
}
