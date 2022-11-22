import { TestBed } from '@angular/core/testing';

import { CreateActivateGuard } from './create-activate.guard';

describe('CreateActivateGuard', () => {
  let guard: CreateActivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateActivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
