import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormOrderDetailComponent } from './df-order-detail.component';

describe('DialogsFormOrderDetailComponent', () => {
  let component: DialogsFormOrderDetailComponent;
  let fixture: ComponentFixture<DialogsFormOrderDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormOrderDetailComponent]
    });
    fixture = TestBed.createComponent(DialogsFormOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
