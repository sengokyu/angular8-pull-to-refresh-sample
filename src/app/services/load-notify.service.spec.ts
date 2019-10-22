import { TestBed } from '@angular/core/testing';

import { LoadNotifyService } from './load-notify.service';

describe('LoadNotifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadNotifyService = TestBed.get(LoadNotifyService);
    expect(service).toBeTruthy();
  });
});
