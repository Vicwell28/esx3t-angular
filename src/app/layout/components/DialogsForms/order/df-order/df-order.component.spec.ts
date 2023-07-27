import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormOrderComponent } from './df-order.component';

describe('DialogsFormOrderComponent', () => {
  let component: DialogsFormOrderComponent;
  let fixture: ComponentFixture<DialogsFormOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormOrderComponent]
    });
    fixture = TestBed.createComponent(DialogsFormOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
