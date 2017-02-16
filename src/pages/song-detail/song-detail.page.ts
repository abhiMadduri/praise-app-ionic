import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Pipe, Injectable } from '@angular/core'
//import { PrettyPrint } from '../pages';

/*
  Generated class for the SongDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-song-detail',
    templateUrl: 'song-detail.page.html'
})
export class SongDetailPage {

    url: SafeResourceUrl;
    results = [];
    song: any;
    
    //jsontext = {"lyrics_en": "Amazing grace! How sweet the sound \n That saved a wretch like me!"};


    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public sanitizer: DomSanitizer) {
        this.results.push(this.navParams.data);
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/CDdvReNKKuk');

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SongDetailPage');

        //this.song = JSON.parse(this.jsontext);
        //this.song = this.jsontext.lyrics_en.split("\\n");
        //this.results.push(this.jsontext.lyrics_en);
        //console.log(this.results);

    }
}


