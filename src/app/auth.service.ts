import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }

  isLogged: boolean = false;
  redirectUrl: string;

login(username: string, password: string): Observable<boolean> {
  this.isLogged = true;
  
}

logout() {
  this.isLogged = false;
}


}





