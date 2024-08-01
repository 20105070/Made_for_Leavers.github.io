/*http_service.ts - Daniel Syrén (20105070)*/
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from './models/university';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /*constructor(private httpClient: HttpClient) injects httpClient.*/
  constructor(private httpClient: HttpClient) { }
  authService = inject(AuthService);

  /*deleteUniversity(email: string, name: string) sends delete request to the C# back-end.*/
  deleteUniversity(email: string, name: string): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    headers = headers.set("Authorization", email);
    return this.httpClient.delete(`https://localhost:3248/University/DeleteUniversity/${name}`, { headers: headers });
  }

  /*getUniversity(email: string) sends get request to the C# back-end.*/
  getUniversity(email: string): Observable<University[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    headers = headers.set("Authorization", email);
    return this.httpClient.get<University[]>('https://localhost:3248/University/GetUniversity', { headers: headers });
  }

  /*postUniversity(university: University) sends post request to the C# back-end.*/
  postUniversity(university: University): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*").set('Content-Type', 'application/json');
    return this.httpClient.post<University>('https://localhost:3248/University/PostUniversity', university, { headers: headers });
  }

}