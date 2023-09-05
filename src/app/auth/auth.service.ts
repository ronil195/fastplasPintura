import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken (): string {
    return "c3VwZXI6c3VwZXI=";
  }
}
