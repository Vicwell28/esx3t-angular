import { TestBed } from '@angular/core/testing';

import { ImagesUploadService } from './images-upload.service';

describe('ImagesUploadService', () => {
  let service: ImagesUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
