
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TipsPage } from '../pages/tips/tips';
import { RoomsPage } from '../pages/rooms/rooms';
import { HouseDetailTabsPage } from '../pages/house-detail-tabs/house-detail-tabs';
import { ResidentsPage } from './../pages/residents/residents';
import { ChecklistPage } from './../pages/myChecklist/my-checklist';
import { MyProfileTabsPage } from './../pages/my-profile-tabs/my-profile';
import { RecommendationsPage } from './../pages/getRecommendations/get-recommendations';
import { HousesPage } from './../pages/houses/houses';
import { HousesProvider } from '../providers/houses';


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
    RoomsPage,
    ResidentsPage,
    HouseDetailTabsPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
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
    RoomsPage,
    ResidentsPage,
    HouseDetailTabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HousesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
