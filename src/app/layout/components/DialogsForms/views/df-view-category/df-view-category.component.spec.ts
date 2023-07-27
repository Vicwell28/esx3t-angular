import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormViewCategoryComponent } from './df-view-category.component';

describe('DialogsFormViewCategoryComponent', () => {
  let component: DialogsFormViewCategoryComponent;
  let fixture: ComponentFixture<DialogsFormViewCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormViewCategoryComponent]
    });
    fixture = TestBed.createComponent(DialogsFormViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
