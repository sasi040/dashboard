import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Application } from './interfaces/application';
// import { ApplicationDetails } from './interfaces/applicationDetails';
import { Link } from './interfaces/link';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {

  applications: Application[];

  constructor(private http: HttpClient) { }
    
  public getApplications(): Observable<Application[]>{
      return this.http.get<Application[]>('/assets/application-list.json'); // replace this with actual 
  }  

  // public getApplicationDetails(id: number) : Observable<ApplicationDetails>{
  //   const url = this.applications.find(app => app.id === id).self;
  //   return this.http.get<ApplicationDetails>('/assets/application-details.json'); // replace this url
  // }

  public setApplications(apps: Application[]) {
    this.applications = apps;
  }

}
