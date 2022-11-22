import { TestBed } from '@angular/core/testing';

import { HttpMemberServiceService } from './http-member-service.service';

describe('HttpMemberServiceService', () => {
  let service: HttpMemberServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMemberServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
