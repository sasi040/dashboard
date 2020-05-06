import { Component, OnInit } from '@angular/core';
import { ApplicationListService } from '../application-list.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  applications: Application[];

  constructor(private appListService: ApplicationListService) { }

  ngOnInit(): void {
     this.appListService.getApplications()
         .subscribe(apps => {
      this.applications = apps;
    })
  }
}

export interface Application {
  id: number;
  name: string,
  environment: string,
  applicationUrl: string,
  links: Array<Link>
}

export interface Link {
  rel: string,
  href: string
}