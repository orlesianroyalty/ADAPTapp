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
        return new Promise(resolve => {
            this.http.get<Tip[]>(this.tipEndpoint).subscribe(data => {
            resolve(data);
            }, err => {
            console.log(err);
            });
        });
    }

    getTipsFor(typeID: number) {
        var url = encodeURIComponent(this.tipEndpoint+'{"where":{"type":' + typeID + '}}');
        return new Promise(resolve => {
            this.http.get<Tip[]>(url).subscribe(data => {
            resolve(data);
            }, err => {
            console.log(err);
            });
        });
    }
  
  }