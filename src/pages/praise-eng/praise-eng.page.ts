import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams, ToastController } from 'ionic-angular';
import { PraiseApi } from '../../shared/shared';

/*
  Generated class for the PraiseEng page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-praise-eng',
  templateUrl: 'praise-eng.page.html'
})
export class PraiseEngPage {

  praises : any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingController: LoadingController,
    public praiseApi: PraiseApi,
    public toastController: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PraiseEngPage');

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

  presentToast($event) {
    let toast = this.toastController.create( {
      message : 'tapped',
      duration : 300
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


}
