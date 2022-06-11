import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettresComponent } from './lettres.component';

describe('LettresComponent', () => {
  let component: LettresComponent;
  let fixture: ComponentFixture<LettresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LettresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LettresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
