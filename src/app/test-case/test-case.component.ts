import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../testCase.service';
import { TestCase } from '../interfaces/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {

  testCases: TestCase[];
  executionId: number;
  status : string [] = [];

  constructor(private testCaseService: TestCaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.executionId = +params.get('executionId');
      this.status.push(params.get('testCaseStatus'));
    });
    this.testCaseService.getTestCaseByExecutionAndStatus(this.executionId,this.status,'response')
    .subscribe(res => {
      if (res.status === 200) {
        this.testCases = res.body;
      }
    })
  }

}
