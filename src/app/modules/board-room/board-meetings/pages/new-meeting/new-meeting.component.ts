import { Component } from '@angular/core';

@Component({
  selector: 'koia-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.scss'],
})
export class NewMeetingComponent {
  // mock metting types data
  meetingTypes = [
    { label: 'Board Meeting', active: true },
    { label: 'General assembly', active: false },
    { label: 'Other', active: false },
  ];
}
