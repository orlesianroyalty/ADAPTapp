import { Injectable } from '@angular/core';

//Reference loopback user model
//https://loopback.io/doc/en/lb3/Introduction-to-User-model-authentication.html



//returned after using login API
export class AuthenticatedUser {

    userId: number;
    accessToken: string;
    email: string;
    isGuest: boolean = true;

    constructor(userObj?:Object){
        this.userId = userObj["userId"];
        this.accessToken = userObj['id'];
    }

}

//returned after registering a new user
export class User {

    email: string;
    userId: number;
    
    constructor(newUser?: Object) {
        this.email = newUser['email'];
        this.userId = newUser['id'];
    }

}