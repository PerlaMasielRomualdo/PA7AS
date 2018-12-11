import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean = false;
  
  login(email: String, password: String): boolean {
    if (email == "perla@gmail.com" && password == "12345") {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
    return this.isloggedIn;
  }

  isUserLoggedIn() {
    return this.isUserLoggedIn;
  }

}
