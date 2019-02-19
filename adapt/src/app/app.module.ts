import { CreateHousePage } from './../pages/create-house/create-house';
import { HousesProvider } from './../providers/housesService';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { CreateResidentPage } from './../pages/create-resident/create-resident';
import { CreateRoomPage } from './../pages/create-room/create-room';
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
import { RoomsPage } from '../pages/rooms/rooms';
import { HouseDetailTabsPage } from '../pages/house-detail-tabs/house-detail-tabs';
import { SavedTipsPage } from '../pages/savedTips/saved-tips';
import { SavedRecommendsPage } from '../pages/savedRecommendations/saved-recommends';
import { SavedPage } from '../pages/saved/saved';
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
    CreateRoomPage,
    CreateResidentPage,
    SavedTipsPage,
    SavedRecommendsPage,
    SavedPage,
    CreateHousePage
  ],
  imports: [
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
    CreateRoomPage,
    CreateResidentPage,
    SavedTipsPage,
    SavedRecommendsPage,
    SavedPage,
    CreateHousePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HousesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
