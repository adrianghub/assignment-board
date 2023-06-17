import { Component } from '@angular/core';
import { basePath, meetingTypes } from '../../constants';

@Component({
  selector: 'koia-new-meeting',
  styleUrls: ['./new-meeting.component.scss'],
  template: `
    <koia-layout-header [backUrl]="backUrl" />

    <div class="wrapper">
      <div class="main-content">
        <h1 class="semi-bold-headline-large headline">New Meeting</h1>

        <h2 class="semi-bold-headline-small headline-small">Meeting type</h2>

        <koia-selectable-button-group
          [items]="meetingTypes"
        ></koia-selectable-button-group>
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
export class NewMeetingComponent {
  backUrl = basePath;
  meetingTypes = meetingTypes;
}
