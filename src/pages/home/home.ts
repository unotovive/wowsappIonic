import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { GermanyPage } from '../ships/germany/germany';
import { SovietPage } from '../ships/soviet/soviet';
import { JapanPage } from '../ships/japan/japan';
import { NationsPage } from '../ships/nations/nations';
import { UsaPage } from '../ships/usa/usa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    nations: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public af: AngularFire) {
      this.nations = af.database.list('/nations');
   }

  openNationPage(nation){
    console.log(nation.name);
    this.navCtrl.push(NationsPage, {nation: nation});
  }

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
