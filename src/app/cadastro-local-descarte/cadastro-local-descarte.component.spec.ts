import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLocalDescarteComponent } from './cadastro-local-descarte.component';

describe('CadastroLocalDescarteComponent', () => {
  let component: CadastroLocalDescarteComponent;
  let fixture: ComponentFixture<CadastroLocalDescarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroLocalDescarteComponent]
    });
    fixture = TestBed.createComponent(CadastroLocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
