import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GermanyPagesPage } from "../ships/GermanyPages/GermanyPages"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  opengermanyPage() {
      this.navCtrl.push(GermanyPagesPage);
  }

}
