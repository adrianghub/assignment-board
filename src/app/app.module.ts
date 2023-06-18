import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { Module, configTranslateModule } from './core/module.abstract';
import { BoardRoomModule } from './modules/board-room/board-room.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(
      configTranslateModule([
        'misc',
        'page/board-meetings/board-meetings',
        'page/board-meetings/new-meeting',
      ])
    ),
    CoreModule,
    RouterModule.forRoot(appRoutes),
    BoardRoomModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule extends Module {
  constructor(override translateService: TranslateService) {
    super(translateService);
  }
}
