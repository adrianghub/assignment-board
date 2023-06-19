import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'koia-invitees-search',
  template: ` <koia-input
    [control]="query"
    [icon]="'search'"
    [label]="'newMeeting.section.meetingInvitees.search.label' | translate"
    (changed)="queryChanged.emit($event!)"
  ></koia-input>`,

  styleUrls: ['./invitees-search.component.scss'],
})
export class InviteesSearchComponent {
  @Output() queryChanged = new EventEmitter<string>();

  query = new FormControl<string>('', {
    nonNullable: true,
  });
}
