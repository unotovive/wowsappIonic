import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,public af: AngularFire) {
    this.items = af.database.list('/maps');
  }

}
