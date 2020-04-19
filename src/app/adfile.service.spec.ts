import { TestBed } from '@angular/core/testing';

import { AdfileService } from './adfile.service';

describe('AdfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdfileService = TestBed.get(AdfileService);
    expect(service).toBeTruthy();
  });
});
