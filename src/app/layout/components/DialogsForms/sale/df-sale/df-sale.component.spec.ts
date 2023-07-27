import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormSaleComponent } from './df-sale.component';

describe('DialogsFormSaleComponent', () => {
  let component: DialogsFormSaleComponent;
  let fixture: ComponentFixture<DialogsFormSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormSaleComponent]
    });
    fixture = TestBed.createComponent(DialogsFormSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
