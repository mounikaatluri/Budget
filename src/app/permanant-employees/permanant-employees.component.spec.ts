import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanantEmployeesComponent } from './permanant-employees.component';

describe('PermanantEmployeesComponent', () => {
  let component: PermanantEmployeesComponent;
  let fixture: ComponentFixture<PermanantEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanantEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanantEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
