import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './application-list/application-list.component';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {

  constructor(private http: HttpClient) { }

  public getApplications(): any{
    return this.http.get('/assets/application-list.json');
  }
}
