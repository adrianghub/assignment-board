import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'board-room/board-meetings/new-meeting',
        loadChildren: () =>
          import('./modules/board-room/board-room.module').then(
            (m) => m.BoardRoomModule
          ),
      },
      {
        path: '**',
        redirectTo: 'board-room/board-meetings/new-meeting',
        pathMatch: 'full',
      },
    ],
  },
];
