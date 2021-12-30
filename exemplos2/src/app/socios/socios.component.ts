import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {

  /*   @Input() nome: string = "João"; // fica público para ser alterado pelo componente pai
  
    constructor() { }
   */

  /* --------------------------------------------------------- */

  /* socios = [];

  constructor() {
    this.socios.push({
      nome: 'João',
      contato: 12345
    });
  }
 */

  /* --------------------------------------------------------- */

  /*   socios = [];
  
    constructor() {
      this.socios.push({ nome: 'João', contato: 12345 });
      this.socios.push({ nome: 'Almir', contato: 23456 });
      this.socios.push({ nome: 'Maria', contato: 34567 });
      this.socios.push({ nome: 'Gilberto', contato: 45678 });
      this.socios.push({ nome: 'Rita', contato: 56789 });
    }
   */

  /* --------------------------------------------------------- */

  /*   novos_socios = [];
  
    constructor() {
      this.novos_socios.push({ nome: 'Sócio 1', contato: 11111 });
      this.novos_socios.push({ nome: 'Sócio 2', contato: 22222 });
      this.novos_socios.push({ nome: 'Sócio 3', contato: 33333 });
      this.novos_socios.push({ nome: 'Sócio 4', contato: 44444 });
    }
   */

  /* --------------------------------------------------------- */

  /*   @Input() socios = [];
  
    constructor() {
      this.socios.push({ nome: 'João', contato: 12345 });
      this.socios.push({ nome: 'Almir', contato: 23456 });
      this.socios.push({ nome: 'Maria', contato: 34567 });
      this.socios.push({ nome: 'Gilberto', contato: 45678 });
      this.socios.push({ nome: 'Rita', contato: 56789 });
    }
   */

  /* --------------------------------------------------------- */

  /* Aula 31 */

  @Input('nome_novo') nome: string = "João";

  /* --------------------------------------------------------- */


}
