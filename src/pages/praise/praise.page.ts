import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';

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

  constructor(
    public navCtrl: NavController, 
    public loadingController: LoadingController,
    public praiseApi: PraiseApi) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PraisePage');

    let loader = this.loadingController.create({
      content : 'Getting All Praises..'
    });

    loader.present().then(() => {
      this.praiseApi.getAllPraises().then(data => {
         //console.log(data);
        this.praises = data;
        loader.dismiss();
      })
    });
  }

}
