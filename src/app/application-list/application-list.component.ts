import { Component, OnInit } from '@angular/core';
import { ApplicationListService } from '../application-list.service';
import { map, filter } from 'rxjs/operators'
import { Application } from '../interfaces/application';
import { ApplicationService } from '../applicationRestController.service';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $ :any;


@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  applications: Application[];
  applicationVOs: Application[];
  applicationForm: FormGroup;
  displayApplicationForm: Boolean = false;
  ackUserAction: Boolean = false;
  isSubmissionInProgress: Boolean = false;

  constructor(private appListService: ApplicationListService, private appService: ApplicationService,
    private formBuilder: FormBuilder) { 
    this.applicationForm = this.formBuilder.group({
      name: '',
      description: ''
    })
  }

  ngOnInit(): void {
    this.appListService.getApplications()
     .subscribe(apps => {
       this.applications = apps;
       this.appListService.setApplications(apps);
      //  this.applications.forEach(app => {
      //   app.self = app.links.find(link => link.rel === 'self').rel;
      // });
      this.appService.getAllApplications('response')
      .pipe(
        filter(res => res.status === 200)
      )
      .subscribe(res => {
        this.applicationVOs = res.body;
      })
     });
     
  }

  onSubmitApplicationForm(applicationData) {
    this.isSubmissionInProgress = true;
    this.appService.createApplication(applicationData,'response')
    .subscribe(res => {
      if (res.status === 201) {
        this.ackUserAction = true;
    setTimeout(() => {
      this.ackUserAction = false;
    },2000);
    this.applicationForm.reset();
      }
      this.isSubmissionInProgress = false;
    })
    $('#applicationModal').modal('hide');
    this.toggleApplicationForm();
  }

  toggleApplicationForm() {
    this.applicationForm.reset();
    this.displayApplicationForm = !this.displayApplicationForm;
  }
  
}