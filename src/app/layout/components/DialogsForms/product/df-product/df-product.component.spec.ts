import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormProductComponent } from './df-product.component';

describe('DialogsFormProductComponent', () => {
  let component: DialogsFormProductComponent;
  let fixture: ComponentFixture<DialogsFormProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormProductComponent]
    });
    fixture = TestBed.createComponent(DialogsFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
