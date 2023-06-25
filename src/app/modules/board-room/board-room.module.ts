import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CoreModule } from 'src/app/core/core.module';
import { UrlService } from 'src/app/core/services/url.service';
import { ButtonComponent } from 'src/app/shared/ui/atoms/button/button.component';
import { DatePickerComponent } from 'src/app/shared/ui/atoms/date-picker/date-picker.component';
import { InputComponent } from 'src/app/shared/ui/atoms/input/input.component';
import { TabsComponent } from 'src/app/shared/ui/atoms/tabs/tabs.component';
import { SelectableButtonGroupComponent } from 'src/app/shared/ui/molecules/selectable-button-group/selectable-button-group.component';
import { TimePickerRangeComponent } from 'src/app/shared/ui/molecules/time-picker-range/time-picker-range.component';
import { boardRoomRoutes } from './board-room.routes';
import { BoardMeetingsPage } from './meetings/pages/board-meetings/board-meetings.page';
import { NewMeetingPage } from './meetings/pages/new-meeting/new-meeting.page';
import { MeetingDateSection } from './meetings/pages/new-meeting/sections/meeting-date/meeting-date.section';
import { InviteesListComponent } from './meetings/pages/new-meeting/sections/meeting-invitees/invitees-list/invitees-list.component';
import { InviteesSearchComponent } from './meetings/pages/new-meeting/sections/meeting-invitees/invitees-search/invitees-search.component';
import { MeetingInviteesSection } from './meetings/pages/new-meeting/sections/meeting-invitees/meeting-invitees.section';
import { MeetingLocationSection } from './meetings/pages/new-meeting/sections/meeting-location/meeting-location.section';
import { MeetingNameSection } from './meetings/pages/new-meeting/sections/meeting-name/meeting-name.section';
import { MeetingTypesSection } from './meetings/pages/new-meeting/sections/meeting-types/meeting-types.section';
import { MeetingsService } from './meetings/services/meetings.service';

@NgModule({
  declarations: [
    NewMeetingPage,
    BoardMeetingsPage,
    MeetingTypesSection,
    MeetingNameSection,
    MeetingDateSection,
    MeetingInviteesSection,
    MeetingLocationSection,
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
    TranslateModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [MeetingsService, UrlService],
})
export class BoardRoomModule {}
