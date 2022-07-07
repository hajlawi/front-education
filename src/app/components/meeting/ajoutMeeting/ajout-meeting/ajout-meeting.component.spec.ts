import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMeetingComponent } from './ajout-meeting.component';

describe('AjoutMeetingComponent', () => {
  let component: AjoutMeetingComponent;
  let fixture: ComponentFixture<AjoutMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
