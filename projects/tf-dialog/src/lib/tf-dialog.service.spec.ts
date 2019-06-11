import { TestBed } from '@angular/core/testing';

import { TfDialogService } from './tf-dialog.service';

describe('TfDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TfDialogService = TestBed.get(TfDialogService);
    expect(service).toBeTruthy();
  });
});
