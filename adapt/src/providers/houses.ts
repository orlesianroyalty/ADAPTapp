import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class HousesProvider {

    private apiUrl = 'http://localhost:8080/api/';

	constructor(public http: HttpClient) {

  }

  //this is the general format
	getHouses(userID: String) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'houses').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
      
    
    addResidents(houseID: String, residentID: [String]){
        //TODO: add the remote method for this.
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
    }

}