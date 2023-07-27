import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormViewRoleComponent } from './df-view-role.component';

describe('DialogsFormViewRoleComponent', () => {
  let component: DialogsFormViewRoleComponent;
  let fixture: ComponentFixture<DialogsFormViewRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormViewRoleComponent]
    });
    fixture = TestBed.createComponent(DialogsFormViewRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
