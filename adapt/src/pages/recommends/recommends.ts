import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, Segment } from 'ionic-angular';
import { Recommendation } from '../../shared/recommendation';
import { HousesProvider } from '../../providers/housesService';
import { RecommendationSlideshowPage } from '../recommendation-slideshow/recommendation-slideshow';

@Component({
  selector: 'page-recommends',
  templateUrl: 'recommends.html'
})
export class RecommendsPage {

  @ViewChild('mySeg') myseg:Segment
  houseId: number;
  roomType: number;
  roomName:string;

    //match this to recommendation category in the recomemndation class.
  recTypes: Array<{id:string, name:string}> = [
    {id:'0', name: "Safety" },
    {id:'1', name: "Mobility" },
    {id:'2', name: "Visibility" },
  ];
  imagePath: any = '';
  recommendations: Recommendation[] = [];
  filteredRecs: Recommendation[] = [];
  selectedCategory: string = "0";
  searchText:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public houseProvider: HousesProvider) {

    this.houseId  = navParams.get('houseId');
    this.roomType  = navParams.get('roomType');
    this.roomName  = navParams.get('roomName');
    console.log(this.roomType);
  }

  ionViewWillEnter(){
    this.selectedCategory = "0";
    this.getRecomendations();
  }
  
  getRecomendations(){
    this.houseProvider.getRecommendationsFor(this.houseId,this.roomType).subscribe(recs => {
      this.recommendations = recs;
      this.filteredRecs = this.recommendations;
      this.filterRecs(null);
      console.log(recs)
    });
  }


  filterRecs(event){
    console.log(this.selectedCategory)
    console.log(this.searchText)
    this.filteredRecs = this.recommendations.filter(rec=>{
      if (rec.name.includes(this.searchText)) {
        return rec.type.toString() == this.selectedCategory;
      }
      return false;
    })

  }

  showRecommendationDetail(rec){
    const filteredByCategory = this.recommendations.filter(rec=>{
      return rec.type.toString() == this.selectedCategory;
    })
    this.navCtrl.push(RecommendationSlideshowPage, {
      initialRec: rec,
      recommendations: filteredByCategory,
      houseId: this.houseId,
      roomName: this.roomName,
    });
  }

  
}