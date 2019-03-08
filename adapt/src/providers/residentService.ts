import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resident } from '../shared/residentsclass';
import { SERVER_URL } from '../shared/environment';

@Injectable()

export class ResidentProvider {

    private apiUrl = SERVER_URL + '/api/';
    private residentEndpoint = this.apiUrl+'residents';

	constructor(public http: HttpClient) {

  }

  //this is the general format
	getResidents(userID: number) {
    return new Promise<Resident[]>(resolve => {
      //TODO:update this to add filter object for user id or update server to support lookup
      this.http.get<Resident[]>(this.residentEndpoint).subscribe(data => {
        console.log(data);//TODO: data is not actually  casted to House type
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  create(userID: number, residentData:Resident) {
    return new Promise(resolve => {
      var data = {...residentData.toNetworkJSON(), userId:userID}
      console.log(residentData)
      this.http.post(this.residentEndpoint,data ).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}