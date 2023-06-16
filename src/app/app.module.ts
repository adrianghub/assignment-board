import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewMeetingComponent } from './modules/board-room/board-meetings/new-meeting/new-meeting.component';

@NgModule({
  declarations: [AppComponent, NewMeetingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
