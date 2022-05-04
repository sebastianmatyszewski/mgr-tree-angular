import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMediumTreeComponent } from './display-medium-tree.component';

describe('DisplayMediumTreeComponent', () => {
  let component: DisplayMediumTreeComponent;
  let fixture: ComponentFixture<DisplayMediumTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMediumTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMediumTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
