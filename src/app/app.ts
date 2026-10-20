import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Rodape } from './componentes/rodape/rodape';
import { ListaProdutos } from './componentes/lista-produtos/lista-produtos';


@Component({
  imports: [RouterOutlet,Cabecalho,Rodape,ListaProdutos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('loja');
}
