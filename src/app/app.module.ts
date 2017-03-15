import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PraisePage, QuotePage, SongDetailPage, HomePage, AddItemPage, PrayerjournalPage } from '../pages/pages';
import { PraiseEngPage, PraiseTelPage,  SongsListPage, PrettyPrint, SongEngPage, SongTelPage } from '../pages/pages';
import { PraiseApi, Sql } from '../shared/shared';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PraisePage,
    QuotePage,
    SongDetailPage,
    PraiseEngPage,
    PraiseTelPage,
    SongsListPage,
    PrettyPrint,
    SongEngPage,
    SongTelPage,
    AddItemPage,
    PrayerjournalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PraisePage,
    QuotePage,
    SongDetailPage,
    PraiseEngPage,
    PraiseTelPage,
    SongsListPage,
    SongEngPage,
    SongTelPage,
    AddItemPage,
    PrayerjournalPage
  ],
  providers: [
    PraiseApi,
    Storage,
    Sql,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
