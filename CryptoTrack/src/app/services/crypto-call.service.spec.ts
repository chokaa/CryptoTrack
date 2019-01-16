import { TestBed } from '@angular/core/testing';

import { CryptoCallService } from './crypto-call.service';

describe('CryptoCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptoCallService = TestBed.get(CryptoCallService);
    expect(service).toBeTruthy();
  });
});
