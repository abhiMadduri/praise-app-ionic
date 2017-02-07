import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { SongDetailPage } from '../pages';

/*
  Generated class for the Song page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-song',
  templateUrl: 'song.page.html'
})
export class SongPage {

  songTypes = [
            { id : 0, name: 'English Christian Songs' },
             { id : 1, name: 'Telugu Christian Songs' },
             { id : 2, name: 'Sunday School Songs' }
  ];

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongPage');
  }

  getAllSongTypes() {
    return this.songTypes;
  }

  itemTapped($event, song) {
    this.navCtrl.push(SongDetailPage, song);
  }

}
