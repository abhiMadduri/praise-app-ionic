import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';
import { PraiseEngPage, PraiseTelPage } from '../pages';
/*
  Generated class for the Praise page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-praise',
  templateUrl: 'praise.page.html'
})
export class PraisePage {

  praises: any;
  praiseEnglishTab = PraiseEngPage;
  praiseTeluguTab = PraiseTelPage;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    public praiseApi: PraiseApi) {
      this.praises = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PraisePage');
  }

}
