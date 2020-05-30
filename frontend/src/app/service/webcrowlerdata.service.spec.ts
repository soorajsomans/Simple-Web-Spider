import { TestBed } from '@angular/core/testing';

import { WebcrowlerdataService } from './webcrowlerdata.service';

describe('WebcrowlerdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebcrowlerdataService = TestBed.get(WebcrowlerdataService);
    expect(service).toBeTruthy();
  });
});
