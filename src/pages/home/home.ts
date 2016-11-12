import { Component } from '@angular/core';
// import { Observable } from '@rxjs/Observable';
import 'rxjs';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
