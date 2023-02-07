import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})

//gestisce le informazioni dell'utente (nome utente, email, ruoli) all'interno del Session Storage del browser. Per il logout, elimineremo questo archivio di sessione.

export class StorageService {

  constructor() { }
  clean(): void {
    window.sessionStorage.clear();
  }
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}
