import { TestBed } from '@angular/core/testing';

import { AdcourseService } from './adcourse.service';

describe('AdcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdcourseService = TestBed.get(AdcourseService);
    expect(service).toBeTruthy();
  });
});
