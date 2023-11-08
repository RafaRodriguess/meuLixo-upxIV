import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-local-descarte',
  templateUrl: './buscar-local-descarte.component.html',
  styleUrls: ['./buscar-local-descarte.component.css']
})
export class BuscarLocalDescarteComponent {

  exibirResultados : boolean = false;

  recebedores : any = [
    {nome: "Facens",
    telefone: "(15)998123456",
    email: "facens@facens.br",
    endereco: "Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino Matucci, Sorocaba - SP, 18085-784"},
    {nome: "Metareciclagem - PMS",
    telefone: " (15)3417-3825",
    email: "meta.recicla@gmail.com",
    endereco: "Avenida Armando Sales de Oliveira, 762 Esquina com rua Araçatuba Trujillo, Sorocaba - SP, 18060-370"}
  ]

  setExibirTrue(){
    this.exibirResultados = true;
  }

  voltarPagina() {
    window.history.back();
  }

}
