import { LoginPage } from './../pages/login/login';
import { CreateHousePage } from './../pages/create-house/create-house';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

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
import { TipsListPage } from '../pages/tips-list/tips-list';
import { TipDetailPage } from '../pages/tip-detail/tip-detail';
import { RoomsPage } from '../pages/rooms/rooms';
import { HouseDetailTabsPage } from '../pages/house-detail-tabs/house-detail-tabs';
import { SavedTipsPage } from '../pages/savedTips/saved-tips';
import { SavedRecommendsPage } from '../pages/savedRecommendations/saved-recommends';
import { SavedPage } from '../pages/saved/saved';
import { RecommendsPage } from '../pages/recommends/recommends';
import { SafetyRecommends } from '../pages/safety-recommends/safety-recommends';
import { MobilityRecommends } from '../pages/mobility-recommends/mobility-recommends';
import { VisibilityRecommends } from '../pages/visibility-recommends/visibility-recommends';
import { RecommendsTabsPage } from '../pages/recommends-tabs/recommends-tabs';
import { VideosPage } from '../pages/videos/videos';

// Network providers
import { HousesProvider } from './../providers/housesService';
import { ResidentProvider } from './../providers/residentService';
import { TipProvider } from '../providers/tipService';
import { RoomsProvider } from '../providers/roomService';
import { RecommendationsProvider } from '../providers/recommendationService';
import { UserProvider} from '../providers/userService';
import { RecommendationSlideshowPage } from '../pages/recommendation-slideshow/recommendation-slideshow';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HousesPage,
    ChecklistPage,
    MyProfileTabsPage,
    RecommendationsPage,
    RecommendationSlideshowPage,
    TipsPage,
    TipsListPage,
    TipDetailPage,
    RoomsPage,
    ResidentsPage,
    HouseDetailTabsPage,
    CreateRoomPage,
    CreateResidentPage,
    SavedTipsPage,
    SavedRecommendsPage,
    SavedPage,
    CreateHousePage,
    RecommendsPage,
    SafetyRecommends,
    MobilityRecommends,
    VisibilityRecommends,
    RecommendsTabsPage,
    VideosPage,
    LoginPage
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
    RecommendationSlideshowPage,
    TipsPage,
    TipsListPage,
    TipDetailPage,
    RoomsPage,
    ResidentsPage,
    HouseDetailTabsPage,
    CreateRoomPage,
    CreateResidentPage,
    SavedTipsPage,
    SavedRecommendsPage,
    SavedPage,
    CreateHousePage,
    RecommendsPage,
    SafetyRecommends,
    MobilityRecommends,
    VisibilityRecommends,
    RecommendsTabsPage,
    VideosPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    HousesProvider,
    RecommendationsProvider,
    ResidentProvider,
    TipProvider,
    RoomsProvider,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
