import type { Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { BoardMeetingsPage } from './meetings/pages/board-meetings/board-meetings.page';
import { NewMeetingPage } from './meetings/pages/new-meeting/new-meeting.page';

export const boardRoomRoutes: Routes = [
  {
    path: 'board-room',
    component: LayoutComponent,
    children: [
      {
        path: 'meetings',
        component: BoardMeetingsPage,
      },
      {
        path: 'meetings/new-meeting',
        component: NewMeetingPage,
      },
      {
        path: '**',
        redirectTo: 'meetings/new-meeting',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'board-room/meetings',
    pathMatch: 'full',
  },
];
