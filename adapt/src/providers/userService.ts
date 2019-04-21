import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { SERVER_URL } from '../shared/environment';
import {User, AuthenticatedUser} from '../shared/user';

@Injectable()


export class UserProvider {

    private apiUrl = SERVER_URL + '/api/';
    private userEndpoint = this.apiUrl+'users';
    user: AuthenticatedUser;
  
    constructor(public http: HttpClient) {
    }
  
    login(email, password) {
        return new Promise<AuthenticatedUser>((resolve, reject) => {
            var data = {
                email: email,
                password:password
            }
            this.http.post<AuthenticatedUser>(this.userEndpoint + "/login",data ).subscribe(data => {
                this.user = new AuthenticatedUser(data);
                resolve(this.user);
            }, err => {
                console.log(err);
                reject(err.statusText);
            });
        });
    }

    logout(accessToken) {
        var headers = new HttpHeaders();
        // append auth token to headers
        headers.append("Authorization", accessToken);
        const options = {
            headers: headers
        };
        const url = this.userEndpoint + "/logout?access_token="+accessToken;
        return this.http.post(url,{}, options);
    }

    register(email, password) {
        return new Promise<User>((resolve, reject) => {
            var data = {
                email: email,
                password:password
            }
            this.http.post<User>(this.userEndpoint,data ).subscribe(data => {
                resolve(new User(data));
            }, err => {
                reject();
            });
        });
    }
  
  }