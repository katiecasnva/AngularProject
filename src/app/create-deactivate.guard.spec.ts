import { TestBed } from '@angular/core/testing';

import { CreateDeactivateGuard } from './create-deactivate.guard';

describe('CreateDeactivateGuard', () => {
  let guard: CreateDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
