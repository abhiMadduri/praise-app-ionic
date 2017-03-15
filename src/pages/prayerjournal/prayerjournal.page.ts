import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddItemPage } from '../pages';
import { Sql } from '../../shared/shared';
 
/*
  Generated class for the Prayerjournal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-prayerjournal',
  templateUrl: 'prayerjournal.page.html'
})
export class PrayerjournalPage {

  public items = [];

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public modalCtrl: ModalController,
  public sql: Sql) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayerjournalPage');

    this.sql.getData().then((todos) => {
      if (todos) {
        console.log('read..' + todos);
        this.items.push(JSON.parse(todos));
        console.log('items..' + this.items);
      }
    });
    
  }

  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
          if(item){
            this.saveItem(item);
          }
    });
    addModal.present();
  }

  saveItem(item){
    console.log("Prayer saved.." + item);
    //this.items.push(item);
    this.sql.save(item.title, item);
  }

}
