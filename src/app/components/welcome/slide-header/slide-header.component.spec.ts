import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideHeaderComponent } from './slide-header.component';

describe('SlideHeaderComponent', () => {
  let component: SlideHeaderComponent;
  let fixture: ComponentFixture<SlideHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
