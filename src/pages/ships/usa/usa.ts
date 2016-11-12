import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Usa page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-usa',
  templateUrl: 'usa.html'
})
export class UsaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello UsaPage Page');
  }

}
