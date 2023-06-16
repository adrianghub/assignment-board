import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { BoardMeetingsComponent } from './board-meetings/pages/board-meetings/board-meetings.component';
import { NewMeetingComponent } from './board-meetings/pages/new-meeting/new-meeting.component';
import { boardRoomRoutes } from './board-room.routes';

@NgModule({
  declarations: [NewMeetingComponent, BoardMeetingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule.forChild(boardRoomRoutes),
  ],
  exports: [NewMeetingComponent, BoardMeetingsComponent],
})
export class BoardRoomModule {}
