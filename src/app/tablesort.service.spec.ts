import { TestBed } from '@angular/core/testing';

import { TablesortService } from './tablesort.service';

describe('TablesortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TablesortService = TestBed.get(TablesortService);
    expect(service).toBeTruthy();
  });
});
