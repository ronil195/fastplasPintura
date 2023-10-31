import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken (): string {
    let sUser: String = environment.usuario;
    let sPass: String = environment.senha;
    
    return btoa(`${sUser}:${sPass}`);
  }
}
