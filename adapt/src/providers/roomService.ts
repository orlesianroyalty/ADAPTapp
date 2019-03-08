import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL } from '../shared/environment';


@Injectable()

export class RoomsProvider {

    private apiUrl = SERVER_URL + '/api/';
    private roomEndpoint= this.apiUrl+'rooms/';

	constructor(public http: HttpClient) {
    }

    getRooms(houseID: number) {
        return new Promise(resolve => {
          this.http.get(this.roomEndpoint + houseID + "/house").subscribe(data => {
            
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

  }