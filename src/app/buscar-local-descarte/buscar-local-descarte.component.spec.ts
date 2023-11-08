import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarLocalDescarteComponent } from './buscar-local-descarte.component';

describe('BuscarLocalDescarteComponent', () => {
  let component: BuscarLocalDescarteComponent;
  let fixture: ComponentFixture<BuscarLocalDescarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarLocalDescarteComponent]
    });
    fixture = TestBed.createComponent(BuscarLocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
