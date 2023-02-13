import { TestBed } from '@angular/core/testing';

import { HoKhauService } from './ho-khau.service';

describe('HoKhauService', () => {
  let service: HoKhauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoKhauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
