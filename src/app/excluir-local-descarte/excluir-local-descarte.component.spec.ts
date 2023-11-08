import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirLocalDescarteComponent } from './excluir-local-descarte.component';

describe('ExcluirLocalDescarteComponent', () => {
  let component: ExcluirLocalDescarteComponent;
  let fixture: ComponentFixture<ExcluirLocalDescarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirLocalDescarteComponent]
    });
    fixture = TestBed.createComponent(ExcluirLocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
