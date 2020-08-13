import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationListService } from '../application-list.service';
import { ApplicationDetails } from '../interfaces/applicationDetails';
import { Location } from '@angular/common';
import { TestExecutionService } from '../testExecution.service';
import { TestExecution } from '../interfaces/testExecution';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {

  appId: number;
  executions: TestExecution[];
  selectedExecution: TestExecution;

  constructor(private route: ActivatedRoute, private executionService: TestExecutionService, private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.appId = +params.get('appId');
    });
    this.executionService.getTestExecutionsByApplication(this.appId,'response')
    .subscribe(res => {
      if (res.status === 200) {
        this.executions = res.body;
        this.selectedExecution = this.executions[0];
      }
    })
  }

  public goBack() {
    this.location.back();
  }
}
