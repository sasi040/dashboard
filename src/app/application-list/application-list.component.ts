import { Component, OnInit } from '@angular/core';
import { ApplicationListService } from '../application-list.service';
import { map } from 'rxjs/operators'
import { Application } from '../interfaces/application';
import { ApplicationRestControllerService } from '../applicationRestController.service';
import { ApplicationVO } from '../interfaces/ApplicationVO';


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications: Application[];
  applicationVOs: ApplicationVO[];

  constructor(private appListService: ApplicationListService, private appService: ApplicationRestControllerService) { }

  ngOnInit(): void {
    this.appListService.getApplications()
     .subscribe(apps => {
       this.applications = apps;
       this.appListService.setApplications(apps);
       this.applications.forEach(app => {
        app.self = app.links.find(link => link.rel === 'self').rel;
      });
      this.appService.getAllUsingGET()
      .subscribe(res => {
        this.applicationVOs = res;
      })
     });
     
  }
}