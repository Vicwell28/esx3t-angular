import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormViewComponent } from './df-view.component';

describe('DialogsFormViewComponent', () => {
  let component: DialogsFormViewComponent;
  let fixture: ComponentFixture<DialogsFormViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormViewComponent]
    });
    fixture = TestBed.createComponent(DialogsFormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
