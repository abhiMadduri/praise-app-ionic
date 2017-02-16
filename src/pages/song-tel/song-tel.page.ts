import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


/*
  Generated class for the SongTel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-song-tel',
  templateUrl: 'song-tel.page.html'
})
export class SongTelPage {

  song: any;
  results = [];
  url: SafeResourceUrl;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sanitizer: DomSanitizer) {
    
    this.song = this.navParams.data;
    this.results.push(this.navParams.data);
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/CDdvReNKKuk');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongTelPage');
  }

}
