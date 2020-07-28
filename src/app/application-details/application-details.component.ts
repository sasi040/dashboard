import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationListService } from '../application-list.service';
import { ApplicationDetails } from '../interfaces/applicationDetails';
import { Location } from '@angular/common';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  appId: number;
  appDetails: ApplicationDetails;

  constructor(private route: ActivatedRoute, private appService: ApplicationListService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.appId = +params.get('appId');
    });
    this.appService.getApplicationDetails(this.appId)
      .subscribe(o => {
        this.appDetails = o;
      });
  }

  public goBack() {
    this.location.back();
  }
}
