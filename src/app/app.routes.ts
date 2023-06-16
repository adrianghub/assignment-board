import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'board-room',
        loadChildren: () =>
          import('./modules/board-room/board-room.module').then(
            (m) => m.BoardRoomModule
          ),
      },
      {
        path: '**',
        redirectTo: 'board-room',
        pathMatch: 'full',
      },
    ],
  },
];
