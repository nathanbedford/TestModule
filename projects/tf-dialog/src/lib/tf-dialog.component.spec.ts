import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfDialogComponent } from './tf-dialog.component';

describe('TfDialogComponent', () => {
  let component: TfDialogComponent;
  let fixture: ComponentFixture<TfDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
