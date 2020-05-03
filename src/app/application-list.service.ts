import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {

  constructor(private http: HttpClient) { }

  public getApplications() {
    return this.http.get('/assets/application-list.json');
  }
}
