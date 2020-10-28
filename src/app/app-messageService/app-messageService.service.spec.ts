/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppMessageServiceService } from './app-messageService.service';

describe('Service: AppMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMessageServiceService]
    });
  });

  it('should ...', inject([AppMessageServiceService], (service: AppMessageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
