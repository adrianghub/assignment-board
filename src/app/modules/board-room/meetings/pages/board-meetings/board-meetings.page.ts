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
        icon="plus"
        [label]="'boardMeetings.header.actions.new' | translate"
        (click)="redirectTo('new-meeting')"
      />
    </koia-layout-header>
  `,
  styleUrls: ['./board-meetings.page.scss'],
})
export class BoardMeetingsPage {
  basePath = basePath;

  constructor(private router: Router) {}

  redirectTo(context: BoardMeetingsRoutes) {
    this.router.navigateByUrl(`${this.basePath}/${context}`);
  }
}
