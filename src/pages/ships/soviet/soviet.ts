import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Soviet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-soviet',
  templateUrl: 'soviet.html'
})
export class SovietPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SovietPage Page');
  }

}
