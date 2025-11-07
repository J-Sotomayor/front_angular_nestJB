import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private baseUrl =environment.urlServidor;

  private http=inject(HttpClient)

  constructor() {}

  loginConNest(crednciales: any){
    return this.http.post<any>(`${this.baseUrl}/auth/login`, crednciales);
  }

  registerConNest(datos: any){
    return this.http.post<any>(`${this.baseUrl}/register`, datos);
  }


}
