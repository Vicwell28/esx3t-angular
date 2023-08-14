import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DfOrdenarProductoComponent } from './df-ordenar-producto.component';

describe('DfOrdenarProductoComponent', () => {
  let component: DfOrdenarProductoComponent;
  let fixture: ComponentFixture<DfOrdenarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DfOrdenarProductoComponent]
    });
    fixture = TestBed.createComponent(DfOrdenarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
