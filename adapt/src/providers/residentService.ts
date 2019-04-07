import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resident } from '../shared/residentsclass';
import { SERVER_URL } from '../shared/environment';
//var querystring = require("querystring");
@Injectable()

export class ResidentProvider {

    private apiUrl = SERVER_URL + '/api/';
    private residentEndpoint = this.apiUrl+'residents';

	constructor(public http: HttpClient) {

  }

	getResidents(userID: number) {
    return new Promise<Resident[]>(resolve => {
      //TODO:update this to add filter object for user id or update server to support lookup
      var url = encodeURIComponent(this.residentEndpoint+'{"where":{"userId":' + userID + '}}');
      this.http.get<Resident[]>(url).subscribe(data => {
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

  update(residentID: number, residentData:Resident) {
    return new Promise(resolve => {
      var data = {...residentData.toNetworkJSON()}
      console.log(residentData)
      this.http.put(this.residentEndpoint + '/' + residentID, data).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  delete(residentID: number, residentData:Resident) {
    return new Promise(resolve => {
      this.http.delete(this.residentEndpoint + '/' + residentID,).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}