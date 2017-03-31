import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatasPage } from '../pages/datas/datas';
import { GermanyPage } from '../pages/ships/germany/germany';
import { UsaPage } from '../pages/ships/usa/usa';
import { JapanPage } from '../pages/ships/japan/japan';
import { SovietPage } from '../pages/ships/soviet/soviet';
import { NationsPage } from '../pages/ships/nations/nations';
import { DetailPage } from '../pages/ships/detail/detail';

// export const firebaseConfig = {
//     apiKey: "AIzaSyAH7eRnwzNSNhLOJ84RTHxkJ2_H2TU92QY",
//     authDomain: "wowsapp-7d6e2.firebaseapp.com",
//     databaseURL: "https://wowsapp-7d6e2.firebaseio.com",
//     storageBucket: "wowsapp-7d6e2.appspot.com",
//     messagingSenderId: "466562334322"
// };

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DatasPage,
    GermanyPage,
    SovietPage,
    JapanPage,
    UsaPage,
    DetailPage,
    NationsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyAH7eRnwzNSNhLOJ84RTHxkJ2_H2TU92QY",
        authDomain: "wowsapp-7d6e2.firebaseapp.com",
        databaseURL: "https://wowsapp-7d6e2.firebaseio.com",
        storageBucket: "wowsapp-7d6e2.appspot.com",
        messagingSenderId: "466562334322"
})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DatasPage,
    GermanyPage,
    SovietPage,
    JapanPage,
    UsaPage,
    DetailPage,
    NationsPage
  ],
  providers: []
})
export class AppModule {}
