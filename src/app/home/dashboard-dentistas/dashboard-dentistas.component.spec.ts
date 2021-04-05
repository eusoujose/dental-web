import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDentistasComponent } from './dashboard-dentistas.component';

describe('DashboardDentistasComponent', () => {
  let component: DashboardDentistasComponent;
  let fixture: ComponentFixture<DashboardDentistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDentistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDentistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
