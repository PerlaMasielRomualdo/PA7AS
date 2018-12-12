import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean{
    if(email == "perla@gmail.com" && password == "12345"){
    
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }

    return this.isloggedIn;
  }

  isUserLoggedIn(){
    return this.isloggedIn;
  }

  logout(){
    return this.isloggedIn = false;
  }
}
