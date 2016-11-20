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
    ship = { name: "Hermelin", teir: 1,type:"巡洋艦", };

    constructor(public navCtrl: NavController, navParams: NavParams) {
        this.num = navParams.get("num");
    }
    ionViewDidLoad() {
        console.log('Hello DetailPage Page');
        switch (this.num) {
            case 1:
                this.ship = { name: "Hermelin",
                　　　　　　　 teir: 1,
                　　　　　    type:"巡洋艦", };
                break;
            case 2:
                this.ship = { name: "Dresden", teir: 2,type:"巡洋艦", };
                break;
        }
    }

}

