import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GermanyPage } from '../ships/germany/germany';

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
}
