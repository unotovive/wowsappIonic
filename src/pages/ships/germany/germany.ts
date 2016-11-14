import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

/*
  Generated class for the Germany page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-germany',
  templateUrl: 'germany.html'
})
export class GermanyPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello GermanyPage Page');
  }
  goToDetailPage(i) {
    this.navCtrl.push(DetailPage, { num : i});
  }

}
