import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLocalDescarteComponent } from './menu-local-descarte.component';

describe('MenuLocalDescarteComponent', () => {
  let component: MenuLocalDescarteComponent;
  let fixture: ComponentFixture<MenuLocalDescarteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuLocalDescarteComponent]
    });
    fixture = TestBed.createComponent(MenuLocalDescarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
