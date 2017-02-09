import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SongsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-songs-list',
  templateUrl: 'songs-list.page.html'
})
export class SongsListPage {

  songs : any;
  title : any;
  songsType : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.songsType = this.navParams.data; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsListPage');
    if (this.songsType === 0) {
      this.title = "English Christian Songs";
    } else if (this.songsType === 1) {
      this.title = "Telugu Christian Songs";
    } else {
      this.title = "Sunday School Christian Songs";
    }
  }

}
