import { TestBed } from '@angular/core/testing';

import { ScullyImageService } from './scully-image.service';

describe('ScullyImageService', () => {
  let service: ScullyImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScullyImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
