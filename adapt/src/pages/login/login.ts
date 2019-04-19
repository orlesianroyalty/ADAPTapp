import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {UserProvider} from '../../providers/userService'
import {User, AuthenticatedUser} from '../../shared/user'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    email: string = "";
    password: string = "";
    user: AuthenticatedUser;
    newUser: User;

    constructor(public navCtrl: NavController, 
                public userProvider: UserProvider,
                public alertCtrl:AlertController) {
      this.email = "";
      this.password = "";
    }

    login() {

      this.userProvider.login(this.email, this.password)
      .then( data  => {
          this.user = data;
          console.log(data);
          this.showHomePage(this.email);
      }).catch (err =>{
        
          let alert = this.alertCtrl.create({
            title: 'Failed to login',
            subTitle:err,
            buttons: ['Dismiss']
          });
          alert.present();
        console.log(err);
      });
    }

    guestEntry(){

      this.userProvider.login("demo@adapt.com", "demo2019")
      .then( data  => {
          this.user = data;
          this.user.isGuest = true;
          console.log(data);
          this.showHomePage("demo@adapt.com");
      }).catch (err =>{
          let alert = this.alertCtrl.create({
            title: 'Failed to login using guest account',
            subTitle:err,
            buttons: ['Dismiss']
          });
          alert.present();
        console.log(err);
      });
    }

    register(){
      this.userProvider.register(this.email, this.password)
      .then( data  => {
          this.newUser = data;
          console.log(data);
          this.login();
      }).catch (err =>{
        
          let alert = this.alertCtrl.create({
            title: 'Failed to register',
            subTitle:err,
            buttons: ['Dismiss']
          });
          alert.present();
        console.log(err);
      });
    }
  
    showHomePage(email){
      this.user.email = email;
      this.navCtrl.setRoot(HomePage, {
        user: this.user
      });
    }
}