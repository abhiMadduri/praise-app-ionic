import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';

/*
  Generated class for the PraiseTel page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-praise-tel',
  templateUrl: 'praise-tel.page.html'
})
export class PraiseTelPage {
  praises : any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    public praiseApi: PraiseApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PraiseTelPage');

    let loader = this.loadingController.create({
      content : 'Getting All Telugu Praises..'
    });

    loader.present().then(() => {
      this.praiseApi.getAllTeluguPraises().then(data => {
         //console.log(data);
        this.praises = data;
        loader.dismiss();
      })
    });
  }

}
