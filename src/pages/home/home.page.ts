import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PraisePage, QuotePage, SongDetailPage } from '../pages';
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

  songTapped($event, page) {
    this.navCtrl.push(SongDetailPage, page)
  }
}
