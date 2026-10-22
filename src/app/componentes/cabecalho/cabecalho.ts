import { Component } from '@angular/core';
import { Carinho } from '../../services/carinho';
@Component({
  imports: [],
  selector: 'app-cabecalho',
  styleUrl: './cabecalho.css',
  templateUrl: './cabecalho.html',
})
export class Cabecalho {
  constructor(public cartService:Carinho){}
}
