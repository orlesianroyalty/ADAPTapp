import { LoginPage } from './../pages/login/login';
import { MyProfileTabsPage } from './../pages/my-profile-tabs/my-profile';
import { TipsPage } from './../pages/tips/tips';
import { HousesPage } from './../pages/houses/houses';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ChecklistPage } from '../pages/myChecklist/my-checklist';
import { RecommendationsPage } from '../pages/getRecommendations/get-recommendations';
import {UserProvider} from '../providers/userService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public userSession: UserProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'My Profile', component: MyProfileTabsPage },
      { title: 'Get Recommendations', component: RecommendationsPage},
      { title: 'Get Tips', component: TipsPage},
      { title: 'My Checklist', component: ChecklistPage},
      { title: 'Log Out', component: LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.nav.setRoot(this.rootPage);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == 'Home') {
      console.log(this.userSession.user);
      this.nav.setRoot(page.component, {
        user: this.userSession.user
      });
    }else{
      this.nav.setRoot(page.component);
    }
  }
}
