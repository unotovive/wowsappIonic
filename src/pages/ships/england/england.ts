import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the England page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-england',
  templateUrl: 'england.html'
})
export class EnglandPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EnglandPage Page');
  }

}
