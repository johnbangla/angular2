import { TestBed, inject } from '@angular/core/testing';

import { SlimserviceService } from './slimservice.service';

describe('SlimserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlimserviceService]
    });
  });

  it('should ...', inject([SlimserviceService], (service: SlimserviceService) => {
    expect(service).toBeTruthy();
  }));
});
