import { TestBed } from '@angular/core/testing';

import { AdmoduleService } from './admodule.service';

describe('AdmoduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmoduleService = TestBed.get(AdmoduleService);
    expect(service).toBeTruthy();
  });
});
