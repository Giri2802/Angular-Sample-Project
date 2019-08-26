import { TestBed } from '@angular/core/testing';

import { CarService } from './carservice.service';

describe('CarserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarService = TestBed.get(CarService);
    expect(service).toBeTruthy();
  });
});
