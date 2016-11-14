import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatasPage } from '../pages/datas/datas';
import { GermanyPage } from '../pages/ships/germany/germany';
import { UsaPage } from '../pages/ships/usa/usa';
import { JapanPage } from '../pages/ships/japan/japan';
import { SovietPage } from '../pages/ships/soviet/soviet';
import { DetailPage } from '../pages/ships/detail/detail';

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
    DetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
    DetailPage
  ],
  providers: []
})
export class AppModule {}
