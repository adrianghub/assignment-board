import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { basePath } from '../../constants/index';

type BoardMeetingsRoutes = 'new-meeting';

@Component({
  selector: 'koia-board-meetings',
  template: `
    <koia-layout-header>
      <koia-button
        actions
        type="primary"
        label="+ new meeting"
        (click)="redirectTo('new-meeting')"
      />
    </koia-layout-header>
  `,
  styleUrls: ['./board-meetings.component.scss'],
})
export class BoardMeetingsComponent {
  basePath = basePath;

  constructor(private router: Router) {}

  redirectTo(context: BoardMeetingsRoutes) {
    this.router.navigateByUrl(`${this.basePath}/${context}`);
  }
}
