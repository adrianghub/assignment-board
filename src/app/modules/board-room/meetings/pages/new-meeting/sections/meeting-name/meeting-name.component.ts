import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'koia-meeting-name',
  template: `
    <koia-input
      [control]="name"
      [label]="'newMeeting.section.meetingName.label' | translate"
      (changed)="nameChanged.emit($event!)"
    ></koia-input>
  `,
})
export class MeetingNameComponent {
  @Output() nameChanged = new EventEmitter<string>();

  name = new FormControl<string>('', {
    nonNullable: true,
    validators: Validators.required,
  });
}
