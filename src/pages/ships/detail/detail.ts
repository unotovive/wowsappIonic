import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  num:string;
  constructor(public navCtrl: NavController, navParams: NavParams) {
      this.num = navParams.get("num");
  }
  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
