import { Component,OnInit } from '@angular/core';
import { CardProduto } from '../card-produto/card-produto'; 
import { Carinho } from '../../services/carinho';
import { Produto, ItemProduto } from '../../services/produto';  

@Component({
  imports: [CardProduto],
  selector: 'app-lista-produto',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})
export class ListaProdutos implements OnInit {
  produtos: ItemProduto[]=[]
  carregando: boolean=true

  constructor(
    private productService: Produto,
    private cartService: Carinho
  ) {}
  
  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos(): void{
    this.produtos=this.productService.produtos
    this.carregando=false
  }

  receberProduto(produto:any){
    console.log('Produto adicionado:', produto?.title);
    this.cartService.adicionar(produto)
    
  }
}
