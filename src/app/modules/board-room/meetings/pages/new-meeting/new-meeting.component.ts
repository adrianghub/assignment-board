import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { UrlService } from 'src/app/core/services/url.service';
import { Tab } from 'src/app/shared/models/shared.model';
import {
  formatDate,
  getCurrentTime,
  getTimeInFuture,
} from 'src/app/shared/utils/date.utils';
import { basePath } from '../../constants';
import { MeetingType, TimeRange } from '../../models/meetings.mode';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'koia-new-meeting',
  styleUrls: ['./new-meeting.component.scss'],
  template: `
    <koia-layout-header [backUrl]="backUrl" />

    <div class="wrapper">
      <div class="main-content">
        <h1 class="semi-bold-headline-large headline">
          {{ 'newMeeting.header' | translate }}
        </h1>

        <h2 class="semi-bold-headline-small headline-small">
          {{ 'newMeeting.section.meetingType.header' | translate }}
        </h2>

        <koia-meeting-types
          class="section"
          [types]="meetingTypes"
          (selected)="urlService.setQueryParams({ type: $event.key })"
        ></koia-meeting-types>

        <h2 class="semi-bold-headline-small headline-small">
          {{ 'newMeeting.section.meetingName.header' | translate }}
        </h2>

        <koia-meeting-name
          class="section"
          (nameChanged)="updateQueryParams({ name: $event })"
        ></koia-meeting-name>

        <h2 class="semi-bold-headline-small headline-small">
          {{ 'newMeeting.section.meetingDate.header' | translate }}
        </h2>

        <koia-meeting-date
          class="section"
          (dateChanged)="updateQueryParams({ date: $event })"
          (timeChanged)="updateQueryParams({ time: $event })"
        ></koia-meeting-date>
      </div>

      <div class="aside">
        <h2 class="semi-bold-headline-small headline-small">
          {{ 'newMeeting.section.meetingInvitees.header' | translate }}
        </h2>

        <koia-tabs
          [tabs]="tabs"
          (selected)="updateQueryParams({ invitees: $event.name })"
        ></koia-tabs>
      </div>
    </div>
  `,
})
export class NewMeetingComponent implements OnInit {
  meetingTypes: MeetingType[] = [];
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

  backUrl = basePath;
  today = formatDate(new Date());

  currentParams: { [key: string]: string | TimeRange } = {};

  constructor(
    private meetingsService: MeetingsService,
    public urlService: UrlService
  ) {}

  ngOnInit() {
    this.urlService.setQueryParams({
      type: 'board',
      date: this.today,
      invitees: 'board',
      start: getCurrentTime(),
      end: getTimeInFuture(1),
    });

    this.urlService
      .getQueryParams()
      .pipe(take(1))
      .subscribe((params) => {
        this.meetingTypes = this.meetingTypes.map((item) =>
          item.key === params['type']
            ? {
                ...item,
                active: true,
              }
            : item
        );
      });

    this.meetingTypes = this.loadMeetingTypes();
  }

  loadMeetingTypes(): MeetingType[] {
    return this.meetingsService.getMeetingTypes().map((type) => ({
      ...type,
      active: false,
    }));
  }

  updateQueryParams(params: { [key: string]: string | TimeRange }) {
    if (params['time']) {
      const timeRange = params['time'] as TimeRange;

      if (timeRange.start) {
        params['start'] = timeRange.start;
      }
      if (timeRange.end) {
        params['end'] = timeRange.end;
      }

      delete params['time'];
    }

    this.urlService.setQueryParams({ ...params });
  }
}
