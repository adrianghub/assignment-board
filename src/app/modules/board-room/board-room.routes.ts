import type { Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layout/layout.component';
import { BoardMeetingsComponent } from './board-meetings/pages/board-meetings/board-meetings.component';
import { NewMeetingComponent } from './board-meetings/pages/new-meeting/new-meeting.component';

export const boardRoomRoutes: Routes = [
  {
    path: 'board-room',
    component: LayoutComponent,
    children: [
      {
        path: 'board-meetings',
        component: BoardMeetingsComponent,
      },
      {
        path: 'board-meetings/new-meeting',
        component: NewMeetingComponent,
      },
      {
        path: '**',
        redirectTo: 'board-meetings/new-meeting',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'board-room/board-meetings',
    pathMatch: 'full',
  },
];
