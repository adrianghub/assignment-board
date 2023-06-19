import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { UrlService } from 'src/app/core/services/url.service';
import { ButtonComponent } from 'src/app/shared/ui/atoms/button/button.component';
import { DatePickerComponent } from 'src/app/shared/ui/atoms/date-picker/date-picker.component';
import { InputComponent } from 'src/app/shared/ui/atoms/input/input.component';
import { TabsComponent } from 'src/app/shared/ui/atoms/tabs/tabs.component';
import { SelectableButtonGroupComponent } from 'src/app/shared/ui/molecules/selectable-button-group/selectable-button-group.component';
import { TimePickerRangeComponent } from 'src/app/shared/ui/molecules/time-picker-range/time-picker-range.component';
import { boardRoomRoutes } from './board-room.routes';
import { BoardMeetingsComponent } from './meetings/pages/board-meetings/board-meetings.component';
import { NewMeetingComponent } from './meetings/pages/new-meeting/new-meeting.component';
import { MeetingDateComponent } from './meetings/pages/new-meeting/sections/meeting-date/meeting-date.component';
import { InviteesListComponent } from './meetings/pages/new-meeting/sections/meeting-invitees/invitees-list/invitees-list.component';
import { MeetingInviteesComponent } from './meetings/pages/new-meeting/sections/meeting-invitees/meeting-invitees.component';
import { MeetingNameComponent } from './meetings/pages/new-meeting/sections/meeting-name/meeting-name.component';
import { MeetingTypesComponent } from './meetings/pages/new-meeting/sections/meeting-types/meeting-types.component';
import { MeetingsService } from './meetings/services/meetings.service';
import { InviteesSearchComponent } from './meetings/pages/new-meeting/sections/meeting-invitees/invitees-search/invitees-search.component';

@NgModule({
  declarations: [
    NewMeetingComponent,
    BoardMeetingsComponent,
    MeetingTypesComponent,
    MeetingNameComponent,
    MeetingDateComponent,
    MeetingInviteesComponent,
    InviteesListComponent,
    InviteesSearchComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(boardRoomRoutes),
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTabsModule,
    ButtonComponent,
    InputComponent,
    SelectableButtonGroupComponent,
    DatePickerComponent,
    TimePickerRangeComponent,
    TabsComponent,
    MatCheckboxModule,
  ],
  providers: [MeetingsService, UrlService],
})
export class BoardRoomModule {}
