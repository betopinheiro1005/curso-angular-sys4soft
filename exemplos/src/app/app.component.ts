import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: ['.cor1{ color: green;}']
})

export class AppComponent {

  /* Aula 12 */

/*   nome: string = "Roberto";
  sobrenome: string = "Pinheiro";
  idade: number = 57;

  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
 */
  // ---------------------------------------------------------------

  /* Aula 13 */

  /*     inativo: boolean = true;
      texto: string = "Aguarde!";
    
      constructor() {
        this.colocarAtivo();
      }
    
      colocarAtivo() {
        setTimeout(() => {
          this.inativo = false;
          this.texto = "Digite o seu nome";
        }, 5000);
      }
   */
  // ---------------------------------------------------------------

  /* Aula 14 */

  /*   texto: string = "Texto inicial";
    inativo: boolean = false;
  
    onClick() {
      this.texto = "Novo texto depois do click";
      this.inativo = true;
    }
   */

  // ---------------------------------------------------------------

  /* Aula 15 */

  /*
  // ativo e inativo
  cmd2_inativo: boolean = false;
  cmd3_inativo: boolean = false;

  // texto dos comandos
  texto_cmd1: string = "Comando 1";
  texto_cmd2: string = "Comando 2";
  texto_cmd3: string = "Comando 3";

  cmd1_Click() {
    // ativa e desativa os outros comandos
    if (!this.cmd2_inativo) {
      this.cmd2_inativo = true;
      this.cmd3_inativo = true;
    } else {
      this.cmd2_inativo = false;
      this.cmd3_inativo = false;
    }
  }

  cmd2_Click() {
    // Muda o texto dos botões para '...'
    this.texto_cmd1 = "...";
    this.texto_cmd2 = "...";
    this.texto_cmd3 = "...";
  }

  cmd3_Click() {
    // Muda o texto dos botões para o texto original
    this.texto_cmd1 = "Comando 1";
    this.texto_cmd2 = "Comando 2";
    this.texto_cmd3 = "Comando 3";
  }
  */

  // ---------------------------------------------------------------

  /* Aula 16 */

/*   valor: string = "texto inicial";

  btn_Click(event: any) {
    this.valor = "novo texto";
    console.log(event);
  }

  teclaPressionada(event: any) {
    // console.log(event);
    this.valor = event.target.value;
  }
 */
  // ---------------------------------------------------------------

  /* Aula 17 */

/*   texto: string = '';

  clicar(event: any) {
    console.log(event);
    this.texto = "Clicou";
  }
  mouseover(event: any) {
    this.texto = event.screenX;
  }
  mousemove(event: any) {
    this.texto = event.screenX + ' - ' + event.screenY;
  }
  executar(event: Event) {
    this.texto = (<HTMLInputElement>event.target).value;
  }
 */
  // ---------------------------------------------------------------

  /* Aula 18 */

/*   valor: string = '';

  // text_Changed(event: any){
  //   this.valor = event.target.value;
  // }

  alterarTexto(){
    this.valor ="Valor alterado com o botão.";
  }
 */
  
 // ---------------------------------------------------------------

  /* Aula 19 */

/*   apresentar: boolean = false;
  texto_botao: string = "Apresentar";

  btn_Click() {
    
    // Adicionar ou remover o parágrafo

    if(this.apresentar){
      this.apresentar = false;
      this.texto_botao = "Apresentar";
    } else{
      this.apresentar = true;
      this.texto_botao = "Remover";
    }
  }
 */
// ---------------------------------------------------------------

  /* Aula 20 */

/* apresentar: boolean = false;

btn_Click() {
  // Adicionar ou remover o parágrafo
  if(this.apresentar){
    this.apresentar = false;
  } else{
    this.apresentar = true;
  }
}
 */
// ---------------------------------------------------------------

/* Aula 21 */

/* altera_cor1: boolean = false;
altera_cor2: boolean = false;

cor_texto1: string = 'white';
cor_fundo1: string = 'blue';
cor_texto2: string = 'black';
cor_fundo2: string = 'yellow';

btn_Click1() {
  if(!this.altera_cor1){
    this.cor_texto1 = 'white';
    this.cor_fundo1 = 'green';
    this.altera_cor1 = true;
  } else {
    this.cor_texto1 = 'white';
    this.cor_fundo1 = 'blue';
    this.altera_cor1 = false;
  }
}
btn_Click2() {
  if(!this.altera_cor2){
    this.cor_texto2 = 'white';
    this.cor_fundo2 = 'black';
    this.altera_cor2 = true;
  } else {
    this.cor_texto2 = 'black';
    this.cor_fundo2 = 'yellow';
    this.altera_cor2 = false;
  }
}
 */

// ---------------------------------------------------------------

/* Aula 22 */

/* estado: boolean = true;

alterarEstilo() {
  return {
    color: 'white',
    backgroundColor: 'blue',
    padding: '10px'
  };
}

Alternar(){
  if(this.estado){
    this.estado = false;
  } else {
    this.estado = true;
  }
}
 */

// ---------------------------------------------------------------

/* Aula 23 */

lista_nomes: string[] = [
  'João', 'Carlos', 'Ana'
];

// ---------------------------------------------------------------


  /*   resposta: string = '';
      respostas_certas: number = 0;
      respostas_erradas: number = 0;
      AvaliarResposta(valor){
        if(valor){
          this.resposta = "Acertou :)";
          this.respostas_certas++;
        } else {
          this.resposta = "Errou :(";
          this.respostas_erradas++;
        }
      }
     */
}
