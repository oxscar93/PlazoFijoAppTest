import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazoDialogComponent } from './plazo-dialog.component';

describe('PlazoDialogComponent', () => {
  let component: PlazoDialogComponent;
  let fixture: ComponentFixture<PlazoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlazoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlazoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
