import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../shared/housesclass';
import { Recommendation } from '../shared/recommendation';
import { SERVER_URL } from '../shared/environment';
import { map } from 'rxjs/operators';
@Injectable()
export class HousesProvider {

    private apiUrl = SERVER_URL + '/api/';
    private houseEndpoint = this.apiUrl+'houses';

	constructor(public http: HttpClient) {

  }

  //this is the general format
	getHouses(userID: number) {
    var filterEncoded = encodeURIComponent('{"where":{"userId":' + userID + '}}');
    var url = this.houseEndpoint+'?filter=' + filterEncoded
    return this.http.get<any[]>(url).pipe(map((data) => {
      
        return data.map( house => new House(house)) 
    }));
  }

  create(userID: number, houseData:House) {
    return new Promise(resolve => {
      var data = {...houseData.toNetworkJSON(), userId:userID}
      console.log(houseData)
      this.http.post(this.houseEndpoint,data ).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
      
    
  addResident(houseID: number, residentID: number) { 
    //TODO: add the remote method for this.
    return new Promise(resolve => {
      this.http.put(this.houseEndpoint+houseID+ '/residents/rel/' + residentID, {}).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveTip(houseID: number, tipID: number) { 
    //TODO: add the remote method for this.
    return new Promise(resolve => {
      this.http.get(this.houseEndpoint+houseID+'/savedTips/rel/'+ tipID).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  saveRecommendation(houseID: number, recID: number) { 
    //TODO: add the remote method for this.
    return new Promise(resolve => {
      this.http.get(this.houseEndpoint+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  getRecommendationsFor(houseID: number, roomType: number) {
      
    var url = this.houseEndpoint + '/' + houseID + "/getRecommendations/" + roomType;
    console.log(url);
    return this.http.get<any[]>(url).pipe(map((data) => {
        return data.map( house => new Recommendation(house)) 
    }));
  }

}