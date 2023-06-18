import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/core/services/url.service';
import { formatDate } from 'src/app/shared/utils/date.utils';
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
          (timeChanged)="updateQueryParams({ timeRange: $event })"
        ></koia-meeting-date>
      </div>

      <div class="aside">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est amet
        quisquam quidem porro aut deleniti expedita rem quas! Praesentium
        explicabo facere voluptates obcaecati corporis fuga neque sapiente ab
        fugit nam.
      </div>
    </div>
  `,
})
export class NewMeetingComponent implements OnInit {
  backUrl = basePath;
  meetingTypes: MeetingType[] = [];

  today = formatDate(new Date());

  constructor(
    private meetingsService: MeetingsService,
    public urlService: UrlService
  ) {}

  ngOnInit() {
    this.urlService.setQueryParams({ type: 'board', date: this.today });

    this.urlService.getQueryParams().subscribe((params) => {
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
    if (params['timeRange']) {
      const timeRange: TimeRange = params['timeRange'] as TimeRange;

      if (timeRange['start']) {
        this.urlService.setQueryParams({ start: timeRange['start'] });
      }

      if (timeRange['end']) {
        this.urlService.setQueryParams({ end: timeRange['end'] });
      }
      return;
    }

    this.urlService.setQueryParams({ ...params });
  }
}
