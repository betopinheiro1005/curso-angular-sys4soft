import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /* Aula 26 */

      // Variáveis que controlam a visibilidade dos componentes
  
      loja_visivel: boolean = true;
      stock_visivel: boolean = false;
    
      MostrarLoja(){
        // Apresenta a loja e remove o stock
          this.stock_visivel = false;
          this.loja_visivel = true;
      }
    
      MostrarStock(){
        // Apresenta o stock remove a loja
          this.loja_visivel = false;
          this.stock_visivel = true;
      }
   
  /* --------------------------------------------------------- */

  /* Aula 27 */

  /* produtos = [];

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
 */
  /* --------------------------------------------------------- */


}
