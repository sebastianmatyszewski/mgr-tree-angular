import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBigTreeComponent } from './display-big-tree.component';

describe('DisplayBigTreeComponent', () => {
  let component: DisplayBigTreeComponent;
  let fixture: ComponentFixture<DisplayBigTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBigTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBigTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
