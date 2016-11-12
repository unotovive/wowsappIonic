import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DatasPage } from '../datas//datas'


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}

@Component({
  template: `<ion-nav [root]="root"></ion-nav>`
})
class MyApp {
  root = DatasPage;

  constructor(){
  }
}

