/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppGreetingsServiceService } from './app-greetingsService.service';

describe('Service: AppGreetingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppGreetingsServiceService]
    });
  });

  it('should ...', inject([AppGreetingsServiceService], (service: AppGreetingsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
