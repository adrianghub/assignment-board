import {
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { UrlService } from 'src/app/core/services/url.service';
import { Tab } from 'src/app/shared/models/shared.model';
import { Invitee, InviteesType } from '../../../../models/meetings.mode';
import { MeetingsService } from '../../../../services/meetings.service';

@Component({
  selector: 'koia-meeting-invitees',
  template: `
    <div class="tabs-wrapper">
      <koia-tabs [tabs]="tabs" (selected)="switchTab($event)" />
    </div>

    <koia-invitees-search
      [query]="searchQuery"
      (queryChanged)="filterInvitees($event)"
    ></koia-invitees-search>

    <ng-container [ngSwitch]="inviteesType">
      <koia-invitees-list
        *ngSwitchCase="'guests'"
        [selected]="selected"
        [invitees]="guestInvitees"
      ></koia-invitees-list>
      <koia-invitees-list
        *ngSwitchDefault
        [selected]="selected"
        [invitees]="boardInvitees"
      ></koia-invitees-list>
    </ng-container>
  `,
  styleUrls: ['./meeting-invitees.section.scss'],
})
export class MeetingInviteesSection implements OnInit {
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

  boardInvitees: Invitee[] = [];
  guestInvitees: Invitee[] = [];

  selected = new Map<number, Invitee>();

  searchQuery = new FormControl<string>('', {
    nonNullable: true,
  });

  constructor(
    private meetingService: MeetingsService,
    private urlService: UrlService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.urlService
      .getQueryParams()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.inviteesType =
          (params['invitees'] as InviteesType) || this.inviteesType;
        this.loadInvitees();
      });
  }

  loadInvitees(): void {
    switch (this.inviteesType) {
      case 'guests':
        this.guestInvitees = this.meetingService.getInvitees('guests');
        break;
      case 'board':
        this.boardInvitees = this.meetingService.getInvitees('board');
        break;
      default:
        break;
    }
  }

  switchTab(tab: Tab): void {
    this.loadInvitees();

    this.searchQuery.reset();
    this.selected.clear();

    this.selectedTab.emit(tab);
  }

  filterInvitees(query: string): void {
    if (!query) {
      this.loadInvitees();
      return;
    }

    switch (this.inviteesType) {
      case 'guests':
        this.guestInvitees = this.meetingService
          .getInvitees('guests')
          .filter((invitee) =>
            invitee.name.toLowerCase().includes(query.toLowerCase())
          );
        break;
      case 'board':
        this.boardInvitees = this.meetingService
          .getInvitees('board')
          .filter((invitee) =>
            invitee.name.toLowerCase().includes(query.toLowerCase())
          );
        break;
      default:
        break;
    }

    this.selected.clear();
  }
}
