import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuscarLocalDescarteComponent } from './buscar-local-descarte/buscar-local-descarte.component';
import { MenuLocalDescarteComponent } from './menu-local-descarte/menu-local-descarte.component';
import { CadastroLocalDescarteComponent } from './cadastro-local-descarte/cadastro-local-descarte.component';
import { ExcluirLocalDescarteComponent } from './excluir-local-descarte/excluir-local-descarte.component';
import { AtualizarLocalDescarteComponent } from './atualizar-local-descarte/atualizar-local-descarte.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    BuscarLocalDescarteComponent,
    MenuLocalDescarteComponent,
    CadastroLocalDescarteComponent,
    ExcluirLocalDescarteComponent,
    AtualizarLocalDescarteComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
