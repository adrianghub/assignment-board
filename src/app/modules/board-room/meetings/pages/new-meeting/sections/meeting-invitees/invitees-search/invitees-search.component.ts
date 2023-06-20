import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'koia-invitees-search',
  template: ` <koia-input
    [control]="query"
    [icon]="'search'"
    [label]="'newMeeting.section.meetingInvitees.search.label' | translate"
    (changed)="queryChanged.emit($event!)"
    (cleared)="queryChanged.emit('')"
  ></koia-input>`,

  styleUrls: ['./invitees-search.component.scss'],
})
export class InviteesSearchComponent {
  @Input() query!: FormControl<string>;

  @Output() queryChanged = new EventEmitter<string>();
}
