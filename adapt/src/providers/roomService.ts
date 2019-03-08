import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()

export class RoomsProvider {

    private apiUrl = 'http://localhost:8080/api/';
    private houseEndpoint = this.apiUrl+'houses';

	constructor(public http: HttpClient) {
    }

    getRooms(houseID: number) {
        return new Promise(resolve => {
          this.http.get(this.apiUrl+houseID +'/rooms').subscribe(data => {
            
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

  }