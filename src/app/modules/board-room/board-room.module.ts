import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { ButtonComponent } from 'src/app/shared/ui/atoms/button/button.component';
import { SelectableButtonGroupComponent } from 'src/app/shared/ui/molecules/selectable-button-group/selectable-button-group.component';
import { boardRoomRoutes } from './board-room.routes';
import { BoardMeetingsComponent } from './meetings/pages/board-meetings/board-meetings.component';
import { NewMeetingComponent } from './meetings/pages/new-meeting/new-meeting.component';

@NgModule({
  declarations: [NewMeetingComponent, BoardMeetingsComponent],
  imports: [
    CoreModule,
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    ButtonComponent,
    SelectableButtonGroupComponent,
    RouterModule.forChild(boardRoomRoutes),
  ],
})
export class BoardRoomModule {}
