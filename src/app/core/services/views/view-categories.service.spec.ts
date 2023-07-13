import { TestBed } from '@angular/core/testing';

import { ViewCategoriesService } from './view-categories.service';

describe('ViewCategoriesService', () => {
  let service: ViewCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
