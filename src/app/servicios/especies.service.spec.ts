import { TestBed } from '@angular/core/testing';

import { EspeciesService } from './especies.service';

describe('EspeciesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspeciesService = TestBed.get(EspeciesService);
    expect(service).toBeTruthy();
  });
});
