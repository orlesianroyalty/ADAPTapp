import { Room } from './../../shared/roomsclass';
import { AltView } from './../recommendations-alt-view/alt-view';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobilityRecommends } from './../mobility-recommends/mobility-recommends';
import { SafetyRecommends } from './../safety-recommends/safety-recommends';
import { VisibilityRecommends } from './../visibility-recommends/visibility-recommends';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';
import { ActionSheetController } from 'ionic-angular';
import { Recommendation } from '../../shared/recommendation';

@Component({
  selector: 'page-recommends',
  templateUrl: 'recommends.html'
})
export class RecommendsPage {
  type: any = 'visiblity';
  roomName: string = 'Kitchen';
  roomType: any = 0;
  imagePath: any = '';
  room: Room;
  recommendations: any[] = [];   //variable to assign server data to
  recommendationsV: any[] = [];  //visiblity recommendations go here
  recommendationsM: any[] = [];  //mobility recommendations go here
  recommendationsS: any[] = [];  //safety recommendations go here

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private navParams: NavParams) {
    this.getRoomType();
    this.setRecommendations();
    this.setImage();
  }
  
  /* Get the room from the nav params and set the roomName and roomType */
  getRoomType() {
    console.log("room", this.navParams.get('room'));
    this.room = this.navParams.get('room');
    //this.roomName = this.room.name;
    //this.roomType = this.room.type;
  }

  /* Assigns recommendations to the corresponding recommendations array. Incomplete */
  setRecommendations() {
    this.getRecommendations();
    //For now for testing there will be 1 recommendation for testing on front end so delete the code about var rec
    //var rec = new Recommendation();
      var rec = "new Rec";
    this.recommendationsV.push(rec);
  }

  getRecommendations() {
    //Get recommendations from the server
  }

  /* Assigns the image for the correct room type. Incomplete */
  setImage() {
    switch (this.roomType) {
      case 0:
        this.imagePath = '../../assets/imgs/Kitchen-BW.jpg';
        break;
      default: 
        this.imagePath = '../../assets/imgs/Kitchen-BW.jpg'; //this line is for testing. Delete when done testing.
        break;
    }
  }

  /* Goes to the alt-view version of recommendations. Complete */
  goToPage(params) {
    this.navCtrl.push(AltView, params);
  }

  /* Allows user to hide recommendations. Incomplete*/
  hide() {
    console.log("hide");
  }

  /* Presents the options to user for a specific recommendation. Complete */
  showActionSheetCtrl(vars) {
    const actionSheet = this.actionSheetCtrl.create(
      {
        title: 'Options',
        buttons: [
          {
            text: 'View',
            handler: () => {
              this.goToPage(vars);
            }
          },
          {
            text: 'Hide',
            handler: () => {
              this.hide();
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log("cancel");
            }
          }
        ]
      }
    );
    actionSheet.present();
  }
}