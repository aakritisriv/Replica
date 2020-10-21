import { TestBed } from '@angular/core/testing';

import { StoreTankCallsService } from './store-tank-calls.service';

describe('StoreTankCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreTankCallsService = TestBed.get(StoreTankCallsService);
    expect(service).toBeTruthy();
  });
});
