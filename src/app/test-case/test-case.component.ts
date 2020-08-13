import { Component, OnInit } from '@angular/core';
import { TestCaseService } from '../testCase.service';
import { TestCase } from '../interfaces/models';

@Component({
  selector: 'app-test-case',
  templateUrl: './test-case.component.html',
  styleUrls: ['./test-case.component.css']
})
export class TestCaseComponent implements OnInit {

  testCases: TestCase[];

  constructor(private testCaseService: TestCaseService) { }

  ngOnInit(): void {
  }

}
