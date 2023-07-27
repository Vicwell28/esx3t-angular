import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormSaleDetailComponent } from './df-sale-detail.component';

describe('DialogsFormSaleDetailComponent', () => {
  let component: DialogsFormSaleDetailComponent;
  let fixture: ComponentFixture<DialogsFormSaleDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormSaleDetailComponent]
    });
    fixture = TestBed.createComponent(DialogsFormSaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
