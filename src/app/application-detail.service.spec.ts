import { TestBed } from '@angular/core/testing';

import { ApplicationDetailService } from './application-detail.service';

describe('ApplicationDetailService', () => {
  let service: ApplicationDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
