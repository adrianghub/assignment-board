import type { Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { BoardMeetingsComponent } from './meetings/pages/board-meetings/board-meetings.component';
import { NewMeetingComponent } from './meetings/pages/new-meeting/new-meeting.component';

export const boardRoomRoutes: Routes = [
  {
    path: 'board-room',
    component: LayoutComponent,
    children: [
      {
        path: 'meetings',
        component: BoardMeetingsComponent,
      },
      {
        path: 'meetings/new-meeting',
        component: NewMeetingComponent,
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
