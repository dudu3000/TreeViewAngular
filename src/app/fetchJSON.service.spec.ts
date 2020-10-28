/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FetchJSONService } from './fetchJSON.service';

describe('Service: FetchJSON', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchJSONService]
    });
  });

  it('should ...', inject([FetchJSONService], (service: FetchJSONService) => {
    expect(service).toBeTruthy();
  }));
});
