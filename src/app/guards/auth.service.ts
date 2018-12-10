import { Injectable } from '@angular/core';
import { logging } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLoggedIn: boolean = false;
  
  login(email: string, password: string): boolean{
    if(email == "perla@gmail.com" && password == "12345"){
      console.log(email == "perla@gmail.com" && password == "12345")
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }
  isUserLoggedIn(){
    return this.isLoggedIn;
  }
}
