import {TestBed} from '@angular/core/testing';

import {RepoPreviewService} from './repo-preview.service';

describe('RepoPreviewService', () => {
  let service: RepoPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
