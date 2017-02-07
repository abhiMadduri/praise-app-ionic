import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';


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
    MyObj : {
    myString: string;
    myNumber: number;
};
    results = [];
    song : String;
    jsontext = '{"lyrics_en": "Amazing grace! How sweet the sound \\n That saved a wretch like me!"}';
  englishSong = {
            "id": 0,
            "title": "Amazing Grace",
            "author": "",
            "album": "",
            "category": "English Christian Songs",
            "language": "eng",
            //"lyrics_en": "Amazing grace! How sweet the sound \\n That saved a wretch like me! ",
            "lyrics_en": ["Amazing grace! How sweet the sound", "That saved a wretch like me! "],
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
    public praiseApi: PraiseApi,
    public loadingController: LoadingController) {
            //    var obj: MyObj = JSON.parse('{ "myString": "string", "myNumber": 4 }');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongDetailPage');

        console.log('song after parsed..');
        console.log(typeof this.jsontext);
        //this.song = JSON.parse(this.jsontext);
        this.results.push(this.englishSong.lyrics_en);
        console.log(this.englishSong.lyrics_en);
        // console.log(JSON.parse(this.jsontext.lyrics_en));
        // JSON.parse(this.jsontext.lyrics_en);
        // JSON.parse(this.jsontext, (k,v) => {
        //     console.log('parsing..' + v);
        //     let results = [];
        //     results.push(JSON.parse(v));
        //     this.song = v;
        // });

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
