import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PraisePage, QuotePage, SongsListPage, PrayerjournalPage } from '../pages';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  praiseTapped($event, page) {
    this.navCtrl.push(PraisePage, page);
  }

  quoteTapped($event, page) {
    this.navCtrl.push(QuotePage, page);
  }

  englishSongsTapped($event, page) {
    this.navCtrl.push(SongsListPage, SongType.ENGLISH)
  }

  teluguSongsTapped($event, page) {
    this.navCtrl.push(SongsListPage, SongType.TELUGU);
  }

  ssSongsTapped($event, page) {
    this.navCtrl.push(SongsListPage, SongType.SUNDAYSCHOOL);
  }

  prayerTapped($event, page) {
    this.navCtrl.push(PrayerjournalPage);
  }
}

enum SongType { ENGLISH, TELUGU, SUNDAYSCHOOL }