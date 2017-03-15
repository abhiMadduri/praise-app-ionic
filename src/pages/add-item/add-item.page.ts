import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Sql } from '../../shared/shared';

/*
  Generated class for the AddItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'add-item',
  templateUrl: 'add-item.page.html'
})
export class AddItemPage {

  title;
  description;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public view: ViewController,
    public sql: Sql) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }

  saveItem() {
    let newItem = {
      title : this.title,
      description : this.description
    };
    this.view.dismiss(newItem);
    this.sql.save(newItem.title, newItem);
  }

  close() {
    this.view.dismiss();
  }

}
