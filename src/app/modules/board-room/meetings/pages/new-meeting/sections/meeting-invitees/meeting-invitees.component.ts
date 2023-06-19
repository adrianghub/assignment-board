import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from 'src/app/shared/models/shared.model';
import { Invitee, InviteesType } from '../../../../models/meetings.mode';
import { MeetingsService } from '../../../../services/meetings.service';

@Component({
  selector: 'koia-meeting-invitees',
  template: `
    <koia-tabs [tabs]="tabs" (selected)="selectedTab.emit($event)" />

    <ng-container [ngSwitch]="inviteesType">
      <ng-container *ngSwitchCase="'guests'">
        <koia-invitees-list
          [invitees]="loadGuesesInvitees()"
        ></koia-invitees-list>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <koia-invitees-list
          [invitees]="loadBoardInvitees()"
        ></koia-invitees-list>
      </ng-container>
    </ng-container>
  `,
  styleUrls: ['./meeting-invitees.component.scss'],
})
export class MeetingInviteesComponent {
  @Input() inviteesType!: InviteesType;

  @Output() selectedTab = new EventEmitter<Tab>();

  tabs: Tab[] = [
    {
      name: 'board',
      translationKey: 'newMeeting.section.meetingInvitees',
      active: true,
    },
    {
      name: 'guests',
      translationKey: 'newMeeting.section.meetingInvitees',
      active: false,
    },
  ];

  constructor(private meetingService: MeetingsService) {}

  loadBoardInvitees(): Invitee[] {
    return this.meetingService.getBoardInvitees();
  }

  loadGuesesInvitees(): Invitee[] {
    return this.meetingService.getGuestsInvitees();
  }
}
