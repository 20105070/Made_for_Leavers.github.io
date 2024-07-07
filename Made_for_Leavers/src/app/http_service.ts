/*http_service.ts - Daniel Syrén (20105070)*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { University } from './models/university';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  /*constructor(private httpClient: HttpClient) injects httpClient.*/
  constructor(private httpClient: HttpClient) { }

  /*deleteUniversity() sends delete request to the C# back-end.*/
  deleteUniversity(name: string): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    return this.httpClient.delete(`https://madeforleaversms.azure-api.net/University/DeleteUniversity/${name}`, { headers: headers });
  }

  /*getUniversity() sends get request to the C# back-end.*/
  getUniversity(): Observable<University[]> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*");
    return this.httpClient.get<University[]>('https://madeforleaversms.azure-api.net/University/GetUniversity', { headers: headers });
  }

  /*postUniversity() sends post request to the C# back-end.*/
  postUniversity(university: University): Observable<any> {
    let headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*").set('Content-Type', 'application/json');
    return this.httpClient.post<University>('https://madeforleaversms.azure-api.net/University/PostUniversity', university, { headers: headers });
  }

}