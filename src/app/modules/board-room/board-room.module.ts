import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMeetingComponent } from './board-meetings/new-meeting/new-meeting.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [NewMeetingComponent],
  imports: [CommonModule, ReactiveFormsModule, MatSlideToggleModule],
  exports: [NewMeetingComponent],
})
export class BoardRoomModule {}
