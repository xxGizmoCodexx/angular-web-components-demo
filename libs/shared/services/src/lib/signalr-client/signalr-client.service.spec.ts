import { TestBed } from '@angular/core/testing';

import { SignalrClientService } from './signalr-client.service';

describe('SignalrClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignalrClientService = TestBed.get(SignalrClientService);
    expect(service).toBeTruthy();
  });
});
