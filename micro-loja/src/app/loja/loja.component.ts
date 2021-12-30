import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {

  /* Aula 27 */

  produtos = [];

  // Adiciona um ananás ao componente

  AdicionarAnanas() {
    this.produtos.push({
      'icon': 'ico_ananas.png',
      'nome': 'Ananás'
    });
  }

  // Adiciona uma banana ao componente

  AdicionarBanana() {
    this.produtos.push({
      'icon': 'ico_banana.png',
      'nome': 'Banana'
    });
  }

  // Adiciona uma laranja ao componente

  AdicionarLaranja() {
    this.produtos.push({
      'icon': 'ico_laranja.png',
      'nome': 'Laranja'
    });
  }

}
