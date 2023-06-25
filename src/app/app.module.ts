import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { Module, configTranslateModule } from './core/module.abstract';
import { BoardRoomModule } from './modules/board-room/board-room.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot(
      configTranslateModule([
        'misc',
        'page/board-meetings/board-meetings',
        'page/board-meetings/new-meeting',
      ])
    ),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    BoardRoomModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule extends Module {
  constructor(override translateService: TranslateService) {
    super(translateService);
  }
}
