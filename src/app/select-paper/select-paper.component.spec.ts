import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaperComponent } from './select-paper.component';

describe('SelectPaperComponent', () => {
  let component: SelectPaperComponent;
  let fixture: ComponentFixture<SelectPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
