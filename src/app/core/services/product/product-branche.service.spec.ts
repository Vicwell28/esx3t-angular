import { TestBed } from '@angular/core/testing';

import { ProductBrancheService } from './product-branche.service';

describe('ProductBrancheService', () => {
  let service: ProductBrancheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBrancheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
