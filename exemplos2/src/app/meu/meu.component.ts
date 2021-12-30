import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-meu',
  templateUrl: './meu.component.html',
  styleUrls: ['./meu.component.css']
})

export class MeuComponent {

  /* Aula 32 */

/*   nome: string = "João";
  @Output() evento = new EventEmitter();

  AlterarNome(){
    this.nome = "Antônio";
    this.evento.emit();
  }
 */

 /* ------------------------------------------------------------- */

  /* Aula 33 */

nome: string = "João";
  @Output() evento = new EventEmitter<string>();

  AlterarNome(){
    this.nome = "Antônio";
    this.evento.emit(this.nome);
  }

}
