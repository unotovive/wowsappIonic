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
    ship = { name: "Hermelin", teir: 1, type: "巡洋艦", hpA: 9000, hpB: null, hpC: null, lengA: 8.6, lengB: null, lengC: null, speedA: 24, speedB: null, hideA: 8.6, hideB: null, hideC: null, tropA: "", tropB: "", tropC: "", airgun: "Nothing" };

    constructor(public navCtrl: NavController, navParams: NavParams) {
        this.num = navParams.get("num");
    }
    ionViewDidLoad() {
        console.log('Hello DetailPage Page');
        switch (this.num) {
            case 1:
                this.ship = { name: "Hermelin", teir: 1, type: "巡洋艦", hpA: 9000, hpB: null, hpC: null, lengA: 8.6, lengB: null, lengC: null, speedA: 24, speedB: null, hideA: 8.6, hideB: null, hideC: null, tropA: "", tropB: "", tropC: "", airgun: "Nothing" };
                break;
            case 2:
                this.ship = { name: "Dresden", teir: 2, type: "巡洋艦", hpA: 15800, hpB: 17100, hpC: null, lengA: 8.1, lengB: 8.9, lengC: null, speedA: 25.5, speedB: null, hideA: 9.5, hideB: null, hideC: null, tropA: "", tropB: "", tropC: "", airgun: "Nothing" };
                break;
            case 3:
                this.ship = { name: "Emden", teir: 2, type: "巡洋艦", hpA: 17100, hpB: null, hpC: null, lengA: 8.9, lengB: null, lengC: null, speedA: 24, speedB: null, hideA: 9.5, hideB: null, hideC: null, tropA: "", tropB: "", tropC: "", airgun: "Nothing" };
                break;
            case 4:
                this.ship = { name: "Kolberg", teir: 3, type: "巡洋艦", hpA: 17200, hpB: 18300, hpC: null, lengA: 8.3, lengB: 9.1, lengC: null, speedA: 27.6, speedB: null, hideA: 9.7, hideB: null, hideC: null, tropA: "", tropB: "", tropC: "", airgun: "Nothing" };
                break;
            case 5:
                this.ship = { name: "karlsruhe", teir: 4, type: "巡洋艦", hpA: 19700, hpB: 22700, hpC: null, lengA: 10.6, lengB: 11.7, lengC: null, speedA: 27.5, speedB: null, hideA: 10.6, hideB: null, hideC: null, tropA: "2*2", tropB: "4*2", tropC: "", airgun: "Little" };
                break;
            case 6:
                this.ship = { name: "Königsberg", teir: 5, type: "巡洋艦", hpA: 22600, hpB: 24300, hpC: null, lengA: 15.0, lengB: 16.5, lengC: null, speedA: 32.5, speedB: null, hideA: 12.4, hideB: null, hideC: null, tropA: "4*3", tropB: "4*3", tropC: "", airgun: "Little" };
                break;
            case 7:
                this.ship = { name: "Nürnberg", teir: 6, type: "巡洋艦", hpA: 23800, hpB: 27000, hpC: null, lengA: 15.0, lengB: 16.5, lengC: null, speedA: 32, speedB: null, hideA: 12.6, hideB: null, hideC: null, tropA: "4*3", tropB: "4*3", tropC: "2*3", airgun: "middle" };
                break;
            case 8:
                this.ship = { name: "Yorck", teir: 7, type: "巡洋艦", hpA: 27200, hpB: 32600, hpC: null, lengA: 15.7, lengB: 17.3, lengC: null, speedA: 32, speedB: null, hideA: 13.9, hideB: null, hideC: null, tropA: "4*3", tropB: "", tropC: "", airgun: "little" };
                break;
            case 9:
                this.ship = { name: "A.Hipper", teir: 8, type: "巡洋艦", hpA: 37300, hpB: 43800, hpC: null, lengA: 16.1, lengB: 17.7, lengC: null, speedA: 32, speedB: null, hideA: 14.2, hideB: null, hideC: null, tropA: "4*3", tropB: "", tropC: "", airgun: "Strong" };
                break;
        }
    }

}

