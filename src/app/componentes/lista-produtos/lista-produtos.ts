import { Component } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto'; 
import { Carinho } from '../../services/carinho';
import { Produto, ItemProduto } from '../../services/produto';  

@Component({
  imports: [CardProduto],
  selector: 'app-lista-produto',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos {
  produtos: ItemProduto[]=[]

  constructor(
    private productService: Produto,
    private cartService: Carinho
  ) {
    this.produtos=this.productService.produtos
  }
  receberProduto(produto:any){
    console.log('Produto adicionado:', produto?.title);
    this.cartService.adicionar(produto)
    
  }
}
