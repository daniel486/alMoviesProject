import { TestBed, inject } from '@angular/core/testing';

import { TvseriesService } from './tvseries.service';

describe('TvseriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvseriesService]
    });
  });

  it('should be created', inject([TvseriesService], (service: TvseriesService) => {
    expect(service).toBeTruthy();
  }));
});
