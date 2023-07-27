import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormProductCategoryComponent } from './df-product-category.component';

describe('DialogsFormProductCategoryComponent', () => {
  let component: DialogsFormProductCategoryComponent;
  let fixture: ComponentFixture<DialogsFormProductCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormProductCategoryComponent]
    });
    fixture = TestBed.createComponent(DialogsFormProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
