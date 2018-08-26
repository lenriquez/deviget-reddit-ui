import { TestBed, inject } from '@angular/core/testing';

import { RedditApiServiceService } from './reddit-api-service.service';

describe('RedditApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditApiServiceService]
    });
  });

  it('should be created', inject([RedditApiServiceService], (service: RedditApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
