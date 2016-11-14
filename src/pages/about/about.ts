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

    openNavDetailsPage(){
      this.navCtrl.push(DatasPage);
      console.log("aaaa");
  }

}
