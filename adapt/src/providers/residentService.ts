import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resident } from '../shared/residentsclass';
import { SERVER_URL } from '../shared/environment';
import { map } from 'rxjs/operators';
@Injectable()

export class ResidentProvider {

    private apiUrl = SERVER_URL + '/api/';
    private residentEndpoint = this.apiUrl+'residents';

	constructor(public http: HttpClient) {

  }

	getResidents(userID: number) {

    var filterEncoded = encodeURIComponent('{"where":{"userId":' + userID + '}}');
    var url = this.residentEndpoint+'?filter=' + filterEncoded;
      return this.http.get<any[]>(url).pipe(map((data) => {
        return data.map( resident => new Resident(resident)) 
    }));
  }

  create(userID: number, residentData:Resident) {
    return new Promise(resolve => {
      var data = {...residentData.toNetworkJSON(), userId:userID}
      console.log(residentData)
      this.http.post(this.residentEndpoint,data ).subscribe(data => {
        console.log("what")
        resolve(data);  
      }, err => {
        console.log("no")
        console.log(err);
      });
    });
  }

  update(residentID: number, residentData:Resident) {
    var data = {...residentData.toNetworkJSON()}
    console.log(residentData)
    return this.http.put(this.residentEndpoint + '/' + residentID, data).pipe(map((data) => {
      return;
    }));
  }

  delete(residentID: number) {
    return this.http.delete(this.residentEndpoint + '/' + residentID).pipe(map((data) => {
      return;
    }));
  }
}