import { Service, signal } from '@angular/core';

@Service()
export class Carinho {
    itens=signal<any[]>([])

    adicionar(produto:any){
        this.itens.update((itens)=>[...itens,produto])

    }
    obterQuantidade():number{
        return this.itens().length
    }
}
export {Carinho as cartService}