import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ForecastService } from './forecast.service';

describe('ForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForecastService]
    });
  });

  it('should be created', inject([ForecastService], (service: ForecastService) => {
    expect(service).toBeTruthy();
  }));
});
