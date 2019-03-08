import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House } from '../shared/housesclass';
import { Resident } from '../shared/residentsclass';

@Injectable()

export class ResidentProvider {

    private apiUrl = 'http://localhost:8080/api/';
    private houseEndpoint = this.apiUrl+'residents';

	constructor(public http: HttpClient) {

  }

  //this is the general format
	getResidents(userID: number) {
    return new Promise<Resident[]>(resolve => {
      this.http.get<Resident[]>(this.houseEndpoint).subscribe(data => {
        console.log(data);//TODO: data is not actually  casted to House type
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}