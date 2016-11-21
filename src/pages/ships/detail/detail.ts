import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})
export class DetailPage {
    num: number;
    ship = { name: "Hermelin", teir: 1,type:"巡洋艦", hpA:100,hpB:200,hpC:300,lengA:10,lengB:10,lengC:10,speedA:30,speedB:40,hideA:11,hideB:12,hideC:14,tropA:"2*3",tropB:"3*3",tropC:"4*4",airgun:"FUCK"};

    constructor(public navCtrl: NavController, navParams: NavParams) {
        this.num = navParams.get("num");
    }
    ionViewDidLoad() {
        console.log('Hello DetailPage Page');
        switch (this.num) {
            case 1:
                this.ship ={ name: "Hermelin", teir: 1,type:"巡洋艦", hpA:100,hpB:200,hpC:300,lengA:10,lengB:10,lengC:10,speedA:30,speedB:40,hideA:11,hideB:12,hideC:14,tropA:"2*3",tropB:"3*3",tropC:"4*4",airgun:"FUCK"};
                break;
            case 2:
                this.ship = { name: "Hermelin", teir: 2,type:"巡洋艦", hpA:100,hpB:200,hpC:300,lengA:10,lengB:10,lengC:10,speedA:30,speedB:40,hideA:11,hideB:12,hideC:14,tropA:"2*3",tropB:"3*3",tropC:"4*4",airgun:"FUCK"};
                break;
        }
    }

}

