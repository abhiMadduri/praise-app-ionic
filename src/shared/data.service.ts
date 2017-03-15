import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Sql {

  constructor(public storage: Storage) {

  }

  getData() {
    return this.storage.get('todos');
  }

  save(key, data) {
    let newData = JSON.stringify(data);
    this.storage.set(key, newData);
  }
  
}
