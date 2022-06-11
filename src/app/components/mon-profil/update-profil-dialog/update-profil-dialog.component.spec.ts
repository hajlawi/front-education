import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfilDialogComponent } from './update-profil-dialog.component';

describe('UpdateProfilDialogComponent', () => {
  let component: UpdateProfilDialogComponent;
  let fixture: ComponentFixture<UpdateProfilDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfilDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
