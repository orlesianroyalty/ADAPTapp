import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tip } from '../shared/tip';
import { SERVER_URL } from '../shared/environment';

@Injectable()


export class TipProvider {

  
    private apiUrl = SERVER_URL + '/api/';
    private tipEndpoint = this.apiUrl+'tips';
  
    constructor(public http: HttpClient) {
    }
  
    getTips() {
        return new Promise<Tip[]>(resolve => {
            this.http.get<Tip[]>(this.tipEndpoint).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

    getTipsFor(typeID: number) {
        var filterEncoded = encodeURIComponent('{"where":{"type":' + typeID + '}}');
        var url = this.tipEndpoint+'?filter=' + filterEncoded
        console.log(url)
        return new Promise<Tip[]>(resolve => {
            this.http.get<Tip[]>(url).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }
  
  }