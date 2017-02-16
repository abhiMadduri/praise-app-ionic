import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';
import { SongDetailPage } from '../pages';
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
  songNames = [];
  songsType : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public praiseApi : PraiseApi,
  public loadingController : LoadingController) {
    this.songsType = this.navParams.data; 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongsListPage');
    if (this.songsType === 0) {
      this.title = "English Christian Songs";
      this.getEnglishSongs();
    } else if (this.songsType === 1) {
      this.title = "Telugu Christian Songs";
      this.getTeluguSongs();
    } else {
      this.title = "Sunday School Christian Songs";
    }
  }

  getEnglishSongs() {

    let loader = this.loadingController.create({
      content: 'Getting English Songs..'
    });

    loader.present().then(() => {
      this.praiseApi.getAllEnglishSongs().then(data => {
        this.songs = data;
        loader.dismiss();
      });
    }); 
    
  }

  getTeluguSongs() {

    let loader = this.loadingController.create({
      content: 'Getting Telugu Songs..'
    });

    loader.present().then(() => {
      this.praiseApi.getAllTeluguSongs().then(data => {
        this.songs = data;
        console.log(this.songs);
        loader.dismiss();
      });
    }); 
    
  }

  songTapped($event, song) {
    this.navCtrl.push(SongDetailPage, song);
  }

}
