import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySmallTreeComponent } from './display-small-tree.component';

describe('DisplaySmallTreeComponent', () => {
  let component: DisplaySmallTreeComponent;
  let fixture: ComponentFixture<DisplaySmallTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySmallTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySmallTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
