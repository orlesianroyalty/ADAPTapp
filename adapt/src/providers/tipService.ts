import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tip } from '../shared/tip';
import { SERVER_URL } from '../shared/environment';
import { map } from 'rxjs/operators';

@Injectable()


export class TipProvider {

  
    private apiUrl = SERVER_URL + '/api/';
    private tipEndpoint = this.apiUrl+'tips';
  
    constructor(public http: HttpClient) {
    }
  
    getTips() {
        return this.http.get<any[]>(this.tipEndpoint).pipe(map((data) => {
            return data.map( tip => new Tip(tip));
        }));
    }

    getTipsFor(typeID: number) {
        var filterEncoded = encodeURIComponent('{"where":{"type":' + typeID + '}}');
        var url = this.tipEndpoint+'?filter=' + filterEncoded
        console.log(url);
        return this.http.get<any[]>(url).pipe(map((data) => {
            return data.map( tip => new Tip(tip));
        }));
    }
  
  }