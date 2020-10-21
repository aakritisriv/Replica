import { TestBed } from '@angular/core/testing';

import { StoreCallsService } from './store-calls.service';

describe('StoreCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreCallsService = TestBed.get(StoreCallsService);
    expect(service).toBeTruthy();
  });
});
