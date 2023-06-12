import { TestBed } from '@angular/core/testing';

import { DoctorPresenceService } from './doctor-presence.service';

describe('DoctorPresenceService', () => {
  let service: DoctorPresenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorPresenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
