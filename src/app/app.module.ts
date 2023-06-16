import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoardRoomModule } from './modules/board-room/board-room.module';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BoardRoomModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
