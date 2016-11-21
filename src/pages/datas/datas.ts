import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-datas',
  templateUrl: 'datas.html'
})
export class DatasPage {
num:number;
map = {mapName:"ダブロンくーださい", battleType:"Tashkentはいいぞ～"};
  constructor(public navCtrl: NavController, navParams: NavParams) {

       this.num = navParams.get("num");
  }

  ionViewDidLoad() {
    console.log('Hello DatasPage Page');
    switch (this.num){
                  case 1:
        this.map={ mapName :"群島",
                  battleType:"通常戦",};
                  break;

                   case 2:
        this.map={ mapName :"群島",
                  battleType:"制圧戦",};
                  break;

                  case 3:
        this.map={ mapName :"ソロモン諸島",
                  battleType:"通常戦",};
                  break;

                  case 4:
        this.map={ mapName :"ソロモン諸島",
                  battleType:"制圧戦",};
                  break;

                  case 5:
        this.map={ mapName :"断層線",
                  battleType:"通常戦",};
                  break;

                  case 6:
        this.map={ mapName :"断層線",
                  battleType:"制圧戦",};
                  break;

                  case 7:
        this.map={ mapName :"北方",
                  battleType:"通常戦",};
                  break;

                  case 8:
        this.map={ mapName :"北方",
                  battleType:"制圧戦",};
                  break;

                  case 9:
        this.map={ mapName :"氷の群島",
                  battleType:"通常戦",};
                  break;

                  case 10:
        this.map={ mapName :"氷の群島",
                  battleType:"制圧戦",};
                  break;

                  case 11:
        this.map={ mapName :"新たなる夜明け",
                  battleType:"通常戦",};
                  break;

                  case 12:
        this.map={ mapName :"新たなる夜明け",
                  battleType:"制圧戦",};
                  break;

                  case 13:
        this.map={ mapName :"大海原",
                  battleType:"通常戦",};
                  break;

                  case 14:
        this.map={ mapName :"大海原",
                  battleType:"制圧戦",};
                  break;

                  case 15:
        this.map={ mapName :"ホットスポット",
                  battleType:"通常戦",};
                  break;

                  case 16:
        this.map={ mapName :"ホットスポット",
                  battleType:"制圧戦",};
                  break;

                  case 17:
        this.map={ mapName :"二人の兄弟",
                  battleType:"通常戦",};
                  break;

                  case 18:
        this.map={ mapName :"二人の兄弟",
                  battleType:"制圧戦",};
                  break;

                  case 19:
        this.map={ mapName :"海峡",
                  battleType:"通常戦",};
                  break;

                  case 20:
        this.map={ mapName :"海峡",
                  battleType:"制圧戦",};
                  break;

                  case 21:
        this.map={ mapName :"列島",
                  battleType:"通常戦",};
                  break;

                  case 22:
        this.map={ mapName :"列島",
                  battleType:"制圧戦",};
                  break;
                  
                  case 23:
        this.map={ mapName :"火の地",
                  battleType:"通常戦",};
                  break;

                  case 24:
        this.map={ mapName :"火の地",
                  battleType:"制圧戦",};
                  break;

                  case 25:
        this.map={ mapName :"北極光",
                  battleType:"通常戦",};
                  break;

                  case 26:
        this.map={ mapName :"北極光",
                  battleType:"制圧戦",};
                  break;

                  case 27:
        this.map={ mapName :"罠",
                  battleType:"通常戦",};
                  break;

                  case 28:
        this.map={ mapName :"罠",
                  battleType:"制圧戦",};
                  break;

                  case 29:
        this.map={ mapName :"大西洋",
                  battleType:"通常戦",};
                  break;

                  case 30:
        this.map={ mapName :"大西洋",
                  battleType:"制圧戦",};
                  break;

                  case 31:
        this.map={ mapName :"粉砕",
                  battleType:"通常戦",};
                  break;

                  case 32:
        this.map={ mapName :"粉砕",
                  battleType:"制圧戦",};
                  break;

                  case 33:
        this.map={ mapName :"砂漠の涙",
                  battleType:"通常戦",};
                  break;

                  case 34:
        this.map={ mapName :"砂漠の涙",
                  battleType:"制圧戦",};
                  break;

                  case 35:
        this.map={ mapName :"山岳地帯",
                  battleType:"通常戦",};
                  break;

                  case 36:
        this.map={ mapName :"山岳地帯",
                  battleType:"制圧戦",};
                  break;

                  case 37:
        this.map={ mapName :"トライデント",
                  battleType:"通常戦",};
                  break;

                  case 38:
        this.map={ mapName :"トライデント",
                  battleType:"制圧戦",};
                  break;

                  case 39:
        this.map={ mapName :"隣接勢力",
                  battleType:"通常戦",};
                  break;

                  case 40:
        this.map={ mapName :"隣接勢力",
                  battleType:"制圧戦",};
                  break;

                  case 41:
        this.map={ mapName :"河口",
                  battleType:"通常戦",};
                  break;

                  case 42:
        this.map={ mapName :"河口",
                  battleType:"制圧戦",};
                  break;

                  case 43:
        this.map={ mapName :"沖縄",
                  battleType:"通常戦",};
                  break;
                  
                  case 44:
        this.map={ mapName :"沖縄",
                  battleType:"制圧戦",};
                  break;

                  case 45:
        this.map={ mapName :"極地",
                  battleType:"通常戦",};
                  break;

                  case 46:
        this.map={ mapName :"極地",
                  battleType:"制圧戦",};
                  break;

                  case 47:
        this.map={ mapName :"戦士の道",
                  battleType:"通常戦",};
                  break;

                  case 48:
        this.map={ mapName :"戦士の道",
                  battleType:"制圧戦",};
                  break;

                  case 49:
        this.map={ mapName :"幸運の海",
                  battleType:"通常戦",};
                  break;

                  case 50:
        this.map={ mapName :"幸運の海",
                  battleType:"制圧戦",};
                  break;

                  case 51:
        this.map={ mapName :"ビッグレース",
                  battleType:"通常戦",};
                  break;

                  case 52:
        this.map={ mapName :"ビッグレース",
                  battleType:"制圧戦",};
                  break;

                  case 53:
        this.map={ mapName :"ループ",
                  battleType:"通常戦",};
                  break;

                  case 54:
        this.map={ mapName :"ループ",
                  battleType:"制圧戦",};
                  break;

                  case 55:
        this.map={ mapName :"破片",
                  battleType:"通常戦",};
                  break;

                  case 56:
        this.map={ mapName :"破片",
                  battleType:"制圧戦",};
                  break;

                  case 57:
        this.map={ mapName :"soon",
                  battleType:"通常戦",};
                  break;

                  case 58:
        this.map={ mapName :"soon",
                  battleType:"制圧戦",};
                  break;

                  case 59:
        this.map={ mapName :"soon",
                  battleType:"通常戦",};
                  break;

                  case 60:
        this.map={ mapName :"soon",
                  battleType:"制圧戦",};
                  break;

    }


  }

}
