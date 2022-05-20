import { TestBed } from '@angular/core/testing';

import { MasBucadosServiceService } from './mas-bucados-service.service';

describe('MasBucadosServiceService', () => {
  let service: MasBucadosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasBucadosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
