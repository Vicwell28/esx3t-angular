import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryProductComponent } from './story-product.component';

describe('StoryProductComponent', () => {
  let component: StoryProductComponent;
  let fixture: ComponentFixture<StoryProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryProductComponent]
    });
    fixture = TestBed.createComponent(StoryProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
