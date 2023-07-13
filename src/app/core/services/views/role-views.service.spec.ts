import { TestBed } from '@angular/core/testing';

import { RoleViewsService } from './role-views.service';

describe('RoleViewsService', () => {
  let service: RoleViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
