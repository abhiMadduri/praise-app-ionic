import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
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
  //template: `<div> {{<p> dakjdgag \n hello </p>  | prettyPrint }}</div>`
})
export class SongDetailPage {
    
    url: SafeResourceUrl;
    results = [];
    song : any;
    jsontext = '{"lyrics_en": "Amazing grace! How sweet the sound \\n That saved a wretch like me!"}';
  englishSong = {
            "id": 0,
            "title": "Amazing Grace",
            "author": "",
            "album": "",
            "category": "English Christian Songs",
            "language": "eng",
            "lyrics_en": "Amazing grace! How sweet the sound \\n That saved a wretch like me! ",
            //"lyrics_en": ["Amazing grace! How sweet the sound", "That saved a wretch like me! "],
            "hidden": false,
            "song_number_in_books": [
                {
                    "book_name": "Andhra Christian Song book",
                    "song_number": 156
                },
                {
                    "book_name": "Hebron Song book",
                    "song_number": 120
                }
            ],
            "tags": [
                "Amazing",
                "grace",
                "english",
                "English Christian Songs"
            ],
            "thumbnail": {
                "sqDefault": "http://uecf.net/images/souvenir.jpg",
                "hqDefault": "http://uecf.net/images/souvenir.jpg"
            },
            "video_links": [
                "http://youtube.com/testtest"
            ],
            "added_at": "2012-04-08T21:37:06.000Z",
            "updated": "2012-04-08T21:37:06.000Z",
            "added_by": "system",
            "likeCount": 5,
            "viewCount": 12,
            "favoriteCount": 15
        };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public praiseApi: PraiseApi,
    public loadingController: LoadingController,
    public sanitizer : DomSanitizer) {
            //    var obj: MyObj = JSON.parse('{ "myString": "string", "myNumber": 4 }');
            this.results.push(this.navParams.data);
            this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/CDdvReNKKuk');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongDetailPage');

        //this.song = JSON.parse(this.jsontext);
        //this.song = this.jsontext.lyrics_en.split("\\n");
        //this.results.push(this.song);
        //console.log(this.results);
        

    // let loader = this.loadingController.create({
    //   content: 'Getting Songs..'
    // });

    // loader.present().then(() => {
    //   this.praiseApi.getAllSongs().then(data => {
    //     this.song = data;
    //     console.log(JSON.parse(this.song));
    //     this.song = JSON.parse(this.song);
    //     loader.dismiss();
    //   })
    // });
  }

//   getAll() {
//       return new Promise(resolve => {
//           let results = [];
//           results.push(JSON.parse(this.jsontext));
//           return results;
//       })
//   }
}


