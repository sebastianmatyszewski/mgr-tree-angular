import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedTreeComponent } from './generated-tree.component';

describe('GeneratedTreeComponent', () => {
  let component: GeneratedTreeComponent;
  let fixture: ComponentFixture<GeneratedTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
