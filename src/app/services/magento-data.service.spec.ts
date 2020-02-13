import { TestBed } from '@angular/core/testing';

import { MagentoDataService } from './magento-data.service';

describe('MagentoDataService', () => {
  let service: MagentoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagentoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
