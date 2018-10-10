import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedPatientsComponent } from './confirmed-patients.component';

describe('ConfirmedPatientsComponent', () => {
  let component: ConfirmedPatientsComponent;
  let fixture: ComponentFixture<ConfirmedPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedPatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
