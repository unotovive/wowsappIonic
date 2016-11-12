import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GermanyPage } from '../ships/germany/germany';
import { SovietPage } from '../ships/soviet/soviet';
import { JapanPage } from '../ships/japan/japan';
import { UsaPage } from '../ships/usa/usa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) { }

  openGermanyPage() {
      this.navCtrl.push(GermanyPage);
      console.log("aaaaa")
  }
  openSovietPage() {
      this.navCtrl.push(SovietPage);
      console.log("aaaaa")
  }
  openJapanPage() {
      this.navCtrl.push(JapanPage);
      console.log("aaaaa")
  }
  openUsaPage() {
      this.navCtrl.push(UsaPage);
      console.log("aaaaa")
  }
}
