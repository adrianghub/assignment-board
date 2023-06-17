import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'koia-board-meetings',
  templateUrl: './board-meetings.component.html',
  styleUrls: ['./board-meetings.component.scss'],
})
export class BoardMeetingsComponent {
  basePath = 'board-room/board-meetings';

  constructor(private router: Router) {}

  redirectTo(context: string) {
    this.router.navigateByUrl(`${this.basePath}/${context}`);
  }
}
