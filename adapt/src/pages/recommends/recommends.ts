import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MobilityRecommends } from './../mobility-recommends/mobility-recommends';
import { SafetyRecommends } from './../safety-recommends/safety-recommends';
import { VisibilityRecommends } from './../visibility-recommends/visibility-recommends';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';
import { Recommendation } from '../../shared/recommendation';
import { HousesProvider } from '../../providers/housesService';

@Component({
  selector: 'page-recommends',
  templateUrl: 'recommends.html'
})
export class RecommendsPage {

  houseId: number;
  roomType: number;
  roomName:string;

    //match this to recommendation category in the recomemndation class.
  recTypes: Array<{id:number, name:string}> = [
    {id:0, name: "Safety" },
    {id:1, name: "Mobility" },
    {id:2, name: "Visibility" },
  ];
  imagePath: any = '';
  recommendations: Recommendation[] = [];
  filteredRecs: Recommendation[] = [];
  selectedCategory: number = 0;
  searchText:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public houseProvider: HousesProvider) {

    this.houseId  = navParams.get('houseId');
    this.roomType  = navParams.get('roomType');
    this.roomName  = navParams.get('roomName');
    console.log(this.roomType);
    this.getRecomendations();
  }
  
  getRecomendations(){
    this.houseProvider.getRecommendationsFor(this.houseId,this.roomType).subscribe(recs => {
      this.recommendations = recs;
      this.filteredRecs = this.recommendations;
      console.log(recs)
    });
  }


  filterRecs(event){
    console.log(this.selectedCategory)
    console.log(this.searchText)
    this.filteredRecs = this.recommendations.filter(rec=>{
      if (rec.name.includes(this.searchText)) {
        return rec.type == this.selectedCategory;
      }
      return false;
    })

  }

  showRecommendationDetail(rec){
    // this.navCtrl.push(RecommendsPage, {
    //   recommendation: rec
    // });
  }

  
}