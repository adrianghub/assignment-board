import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/core/services/url.service';
import { basePath } from '../../constants';
import { MeetingType } from '../../models/meetings.mode';
import { MeetingsService } from '../../services/meetings.service';

@Component({
  selector: 'koia-new-meeting',
  styleUrls: ['./new-meeting.component.scss'],
  template: `
    <koia-layout-header [backUrl]="backUrl" />

    <div class="wrapper">
      <div class="main-content">
        <h1 class="semi-bold-headline-large headline">New Meeting</h1>

        <h2 class="semi-bold-headline-small headline-small">Meeting type</h2>

        <koia-meeting-types
          class="section"
          [types]="meetingTypes"
          (selected)="urlService.setQueryParams({ type: $event.key })"
        ></koia-meeting-types>

        <h2 class="semi-bold-headline-small headline-small">Meeting name</h2>
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

  constructor(
    private meetingsService: MeetingsService,
    public urlService: UrlService
  ) {}

  ngOnInit() {
    this.urlService.setQueryParams({ type: 'board' });

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
}
