import { Component } from '@angular/core';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-cadastro-local-descarte',
  templateUrl: './cadastro-local-descarte.component.html',
  styleUrls: ['./cadastro-local-descarte.component.css']
})
export class CadastroLocalDescarteComponent {
  voltarPagina() {
    window.history.back();
  }

  dadosPessoais : any[] = [];

  nome: string = '';
  email: string = '';
  telefone: string = '';
  rua: string = '';
  numero: string = '';
  cep: string = '';
  complemento: string = '';
  cidade: string = '';

  materiais: { celular?: boolean, monitor?: boolean, tablet?: boolean, notebook?: boolean, 
    mouse?: boolean, radio?: boolean, relogio?: boolean } = {};

  // Cria um novo objeto com os dados dos inputs e adiciona ao array
  addEndereco(){
      let novoCadastro = {
        nome: this.nome,
        email: this.email,
        telefone: this.telefone,
        rua: this.rua,
        numero: this.numero,
        cep: this.cep,
        complemento: this.complemento,
        cidade: this.cidade,
        materiais: this.materiais
      };

      this.dadosPessoais.push(novoCadastro);
      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.rua = '';
      this.numero = '';
      this.cep = '';
      this.complemento = '';
      this.cidade = '';
      this.materiais = {};
      console.log(this.dadosPessoais);
      }
}
