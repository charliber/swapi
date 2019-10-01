import { TestBed } from '@angular/core/testing';

import { NavesService } from './naves.service';

describe('NavesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavesService = TestBed.get(NavesService);
    expect(service).toBeTruthy();
  });
});
