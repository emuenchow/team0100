import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentStep2Component } from './appointment-step2.component';

describe('AppointmentStep2Component', () => {
  let component: AppointmentStep2Component;
  let fixture: ComponentFixture<AppointmentStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
