import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMeetingComponent } from './board-meetings/pages/new-meeting/new-meeting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { BoardMeetingsComponent } from './board-meetings/pages/board-meetings/board-meetings.component';
import { boardRoomRoutes } from './board-room.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NewMeetingComponent, BoardMeetingsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule.forChild(boardRoomRoutes)
  ],
  exports: [NewMeetingComponent, BoardMeetingsComponent],
})
export class BoardRoomModule {}
