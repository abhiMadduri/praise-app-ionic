import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';

/*
  Generated class for the Quote page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.page.html'
})
export class QuotePage {
  quotes : any;

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public praiseApi : PraiseApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');

    let loader = this.loadingController.create({
      content : 'Getting All Quotes..'
    });

    loader.present().then(() => {
      this.praiseApi.getAllQuotes().then(data => {
        this.quotes = data;
        loader.dismiss();
      })
    });
  }

goHome(){
    //this.navCtrl.push(MyTeamsPage);
    this.navCtrl.pop();
  }
}
