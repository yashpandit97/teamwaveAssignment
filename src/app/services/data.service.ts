import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllFieldsAndParameters(){
    const url = " https://api.stackexchange.com/2.3/answers?order=desc&sort=activity&site=stackoverflow";
    return this.http.get(url, {observe: "response"});
  }
}
