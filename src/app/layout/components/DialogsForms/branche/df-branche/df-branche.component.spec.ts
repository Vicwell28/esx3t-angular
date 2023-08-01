import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormBrancheComponent } from './df-branche.component';

describe('DialogsFormBrancheComponent', () => {
  let component: DialogsFormBrancheComponent;
  let fixture: ComponentFixture<DialogsFormBrancheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormBrancheComponent]
    });
    fixture = TestBed.createComponent(DialogsFormBrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
