import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomieGestionComponent } from './economie-gestion.component';

describe('EconomieGestionComponent', () => {
  let component: EconomieGestionComponent;
  let fixture: ComponentFixture<EconomieGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomieGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomieGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
