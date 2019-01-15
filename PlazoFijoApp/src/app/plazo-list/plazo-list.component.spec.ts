import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlazoListComponent } from './plazo-list.component';

describe('PlazoListComponent', () => {
  let component: PlazoListComponent;
  let fixture: ComponentFixture<PlazoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlazoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlazoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
