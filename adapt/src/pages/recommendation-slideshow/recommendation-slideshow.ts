import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/userService';
import { Recommendation } from '../../shared/recommendation';
import { c } from '@angular/core/src/render3';
import { HousesProvider } from '../../providers/housesService';

@Component({
  selector: 'page-recommendation-slideshow',
  templateUrl: 'recommendation-slideshow.html'
})
export class RecommendationSlideshowPage {

  @ViewChild('recSlide') slider: Slides;
  recommendations: Recommendation[];
  roomName:string;
  houseId: number;
  userID: number;
  initialRec: number;
  slideOpts = {
    initialSlide: this.initialRec,
    speed: 400
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
                 public userSession: UserProvider, public houseProvider: HousesProvider,
                 public alertCtrl: AlertController) {
    this.userID = userSession.user.userId;
    this.houseId  = navParams.get('houseId');
    this.roomName  = navParams.get('roomName');
    this.recommendations  = navParams.get('recommendations');
    this.initialRec = this.findRecIndex(navParams.get('initialRec'));
    console.log(this.recommendations);
    
  }


  ionViewDidEnter() {
    this.slider.slideTo(this.initialRec, 0);
    this.slider.pager = true;
    this.slider.paginationHide = false;
  }

  findRecIndex(rec){
    var found = 0;
      this.recommendations.forEach((r,index)=>{
        if (rec.id == r.id){
            found = index;
        }
      }
      )
      return found
  }

  addToChecklist(rec){
      console.log("clocked")
      if (this.userSession.user.isGuest) {
        let alert = this.alertCtrl.create({
            title: 'Oops',
            subTitle: "Please Create an account to save recommendation",
            buttons: ['Dismiss']
          });
        alert.present();
      }else{
        this.houseProvider.saveRecommendation(this.houseId, rec.id)
      }
  }


}
