import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-datas',
  templateUrl: 'datas.html'
})
export class DatasPage {
num:string;
  constructor(public navCtrl: NavController, navParams: NavParams) {

       this.num = navParams.get("num");
  }

  ionViewDidLoad() {
    console.log('Hello DatasPage Page');


  }

}
