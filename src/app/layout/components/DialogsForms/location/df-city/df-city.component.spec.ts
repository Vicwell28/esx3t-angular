import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsFormCityComponent } from './df-city.component';

describe('DialogsFormCityComponent', () => {
  let component: DialogsFormCityComponent;
  let fixture: ComponentFixture<DialogsFormCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogsFormCityComponent]
    });
    fixture = TestBed.createComponent(DialogsFormCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
