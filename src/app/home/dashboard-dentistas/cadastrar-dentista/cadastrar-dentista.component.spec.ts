import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDentistaComponent } from './cadastrar-dentista.component';

describe('CadastrarDentistaComponent', () => {
  let component: CadastrarDentistaComponent;
  let fixture: ComponentFixture<CadastrarDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
