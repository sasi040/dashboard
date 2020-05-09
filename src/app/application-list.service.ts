import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './interfaces/application';
import { Link } from './interfaces/link';
import { ApplicationDetails } from './interfaces/applicationDetails';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {

  applications: Observable<Application[]>;

  constructor(private http: HttpClient) { }

  public getApplications(): Observable<Application[]>{
    return this.http.get<Application[]>('/assets/application-list.json'); // replace this with actual 
  }

  public getApplications1(): Observable<Application[]>{
    this.applications = this.http.get<Application[]>('/assets/application-list.json');
    return this.applications;
  }

  public getApplicationDetails(id: number) : Observable<ApplicationDetails>{
    this.applications.subscribe(apps => {
      const links: Link[] = apps.find(app => app.id === id).links;
      const url = links.find(link => link.rel === 'self');
      console.log(url);
    });
    return this.http.get<ApplicationDetails>('/assets/application-details.json'); // replace this url
  }
}
