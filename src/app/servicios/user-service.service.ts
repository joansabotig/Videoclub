import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private isUserLoggedIn;
  public usserLogged:Usuario;

  constructor() { 
    this.isUserLoggedIn=false;
  }
  setUserLoggedIn(user:Usuario)
  {
    this.isUserLoggedIn=true;
    this.usserLogged = user;
    localStorage.setItem('currentUser',JSON.stringify(user));
  }
  unsetUserLogged()
  {
    this.isUserLoggedIn = false;
    this.usserLogged = null;
    localStorage.setItem('currentUser',JSON.stringify(null));
  }
  getUserLoggedIn()
  {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
