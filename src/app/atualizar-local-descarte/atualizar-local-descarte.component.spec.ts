import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarLocalDescarteComponent } from './atualizar-local-descarte.component';

describe('AtualizarLocalDescarteComponent', () => {
  let component: AtualizarLocalDescarteComponent;
  let fixture: ComponentFixture<AtualizarLocalDescarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarLocalDescarteComponent]
    });
    fixture = TestBed.createComponent(AtualizarLocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
