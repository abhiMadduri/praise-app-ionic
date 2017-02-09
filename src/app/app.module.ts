import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PraisePage, QuotePage, SongPage, SongDetailPage, HomePage } from '../pages/pages';
import { PraiseEngPage, PraiseTelPage,  SongsListPage } from '../pages/pages';
import { PraiseApi } from '../shared/shared';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PraisePage,
    QuotePage,
    SongPage,
    SongDetailPage,
    PraiseEngPage,
    PraiseTelPage,
    SongsListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PraisePage,
    QuotePage,
    SongPage,
    SongDetailPage,
    PraiseEngPage,
    PraiseTelPage,
    SongsListPage
  ],
  providers: [
    PraiseApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
