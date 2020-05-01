import { TestBed, async, inject } from '@angular/core/testing';

import { AuturoleGuard } from './auturole.guard';

describe('AuturoleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuturoleGuard]
    });
  });

  it('should ...', inject([AuturoleGuard], (guard: AuturoleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
