import { TestBed } from '@angular/core/testing';

import { PlanetasService } from './planetas.service';

describe('PlanetasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanetasService = TestBed.get(PlanetasService);
    expect(service).toBeTruthy();
  });
});
