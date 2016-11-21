import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DatasPage } from '../datas/datas';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    map: string = "tsu";

  constructor(public navCtrl: NavController) {}

    openNavDetailsPage(i){
      this.navCtrl.push(DatasPage, { num : i});
      console.log("banzai");
  }

}
