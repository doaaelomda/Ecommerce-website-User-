import { TestBed } from '@angular/core/testing';

import { ProducatsService } from './producats.service';

describe('ProducatsService', () => {
  let service: ProducatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
