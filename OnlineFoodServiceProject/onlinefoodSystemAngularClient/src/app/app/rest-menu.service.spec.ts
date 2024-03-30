import { TestBed } from '@angular/core/testing';

import { RestMenuService } from './rest-menu.service';

describe('RestMenuService', () => {
  let service: RestMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
