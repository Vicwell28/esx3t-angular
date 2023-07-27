import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormStateComponent } from './df-state.component';

describe('DialogsFormStateComponent', () => {
  let component: DialogsFormStateComponent;
  let fixture: ComponentFixture<DialogsFormStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormStateComponent]
    });
    fixture = TestBed.createComponent(DialogsFormStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
