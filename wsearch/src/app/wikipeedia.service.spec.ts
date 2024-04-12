import { TestBed } from '@angular/core/testing';

import { WikipeediaService } from './wikipeedia.service';

describe('WikipeediaService', () => {
  let service: WikipeediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipeediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
