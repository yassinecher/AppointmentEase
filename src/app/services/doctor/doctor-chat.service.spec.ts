import { TestBed } from '@angular/core/testing';

import { DoctorChatService } from './doctor-chat.service';

describe('DoctorChatService', () => {
  let service: DoctorChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
