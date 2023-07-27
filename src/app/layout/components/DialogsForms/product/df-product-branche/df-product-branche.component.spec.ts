import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormProductBrancheComponent } from './df-product-branche.component';

describe('DialogsFormProductBrancheComponent', () => {
  let component: DialogsFormProductBrancheComponent;
  let fixture: ComponentFixture<DialogsFormProductBrancheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormProductBrancheComponent]
    });
    fixture = TestBed.createComponent(DialogsFormProductBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
