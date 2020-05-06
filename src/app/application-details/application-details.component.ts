import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationListService } from '../application-list.service';
import { Application, Link } from '../application-list/application-list.component';
import { ApplicationDetailService } from '../application-detail.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  appId: number;

  applications: Application[];

  constructor(private route: ActivatedRoute, private appService: ApplicationListService,
              private appDetailService: ApplicationDetailService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.appId = +params.get('appId');
      this.appService.getApplications()
      .subscribe(apps => {
        this.applications = apps;
        const links: Link[] = this.applications.find(a => a.id === this.appId).links;
        const appUrl = links.find(link => link.rel === 'self').href;
        console.log(appUrl);
      });
    });
  }

}
