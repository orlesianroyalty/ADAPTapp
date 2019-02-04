import { ResidentsPage } from './../pages/residents/residents';
import { ChecklistPage } from './../pages/myChecklist/my-checklist';
import { MyProfileTabsPage } from './../pages/my-profile-tabs/my-profile';
import { RecommendationsPage } from './../pages/getRecommendations/get-recommendations';
import { HousesPage } from './../pages/houses/houses';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TipsPage } from '../pages/tips/tips';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HousesPage,
    ChecklistPage,
    MyProfileTabsPage,
    RecommendationsPage,
    TipsPage,
    ResidentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HousesPage,
    ChecklistPage,
    MyProfileTabsPage,
    RecommendationsPage,
    TipsPage,
    ResidentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
