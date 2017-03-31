import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Nations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nations',
  templateUrl: 'nations.html'
})
export class NationsPage {
    nation: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.nation = navParams.get("nation");
  }

  ionViewDidLoad() {
    console.log('Hello NationsPage Page');
    console.log(this.nation);
  }

}
