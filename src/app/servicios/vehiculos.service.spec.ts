import { TestBed } from '@angular/core/testing';

import { VehiculosService } from './vehiculos.service';

describe('VehiculosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehiculosService = TestBed.get(VehiculosService);
    expect(service).toBeTruthy();
  });
});
