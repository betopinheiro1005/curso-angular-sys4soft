import { Component } from '@angular/core';

// import { Component, ViewChild, ElementRef, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
// import { cl_operacao } from './operacao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent implements OnInit, DoCheck, OnChanges {

export class AppComponent {


  /* Aula 29 */

  /*   operacao: cl_operacao;
  
    CriarOperacao() {
      this.operacao = new cl_operacao;
    }
   */
  /* ----------------------------------------------------------- */

  /* Aula 30 */

  // novo_nome: string = "JOÃO RIBEIRO";

  /* ----------------------------------------------------------- */

  /*   novos_socios = [];
  
    constructor() {
      this.novos_socios.push({ nome: 'Sócio 1', contato: 11111 });
      this.novos_socios.push({ nome: 'Sócio 2', contato: 22222 });
      this.novos_socios.push({ nome: 'Sócio 3', contato: 33333 });
      this.novos_socios.push({ nome: 'Sócio 4', contato: 44444 });
    }
   */

  /* ----------------------------------------------------------- */

  /* Aula 31 */

  // valor: string = "Antônio";

  /* ----------------------------------------------------------- */

  /* Aula 32 */

  /*   info: string = "Tudo calmo";
  
    Escuta(){
      this.info = "Nome alterado";
    }
   */

  /* ----------------------------------------------------------- */

  /* Aula 33 */

  /*   info: string = "Tudo calmo";
  
    Escuta(valor: string) {
      this.info = "O nome foi alterado para " + valor;
    }
   */

  /* ----------------------------------------------------------- */

  /* Aulas 34 e 35 */

  /* resposta: string = '';
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

  /* ----------------------------------------------------------- */

  /* Aula 37 */

  /*   valor: string = 'mensagem';
  
    AlterarTexto(e:HTMLInputElement, ee:HTMLElement){
      // this.valor = e.target.value;
      this.valor = e.value;
      ee.className = "alert alert-success";
      // console.log(e);
    }
   */

  /* ----------------------------------------------------------- */

  /* Aula 38 */

  /*   valor: string = 'mensagem';
  
    @ViewChild('meuInput') meuElemento: ElementRef;
    @ViewChild('meuParagrafo') meuParagrafo: ElementRef;
  
    Executar() {
      this.valor = this.meuElemento.nativeElement.value;
      this.meuParagrafo.nativeElement.className = "alert alert-success";
    }
   */

  /* ----------------------------------------------------------- */

  /* Aula 39 */

  // texto: string = "Este é o texto da notícia";

  /* ----------------------------------------------------------- */

  /* Aula 41 */

  /*   eventos: string[] = [];
  
    texto: string ='';
  
    constructor(){
      this.eventos.push("Constructor foi executado.");
    }
  
    // Acontece sempre que existe uma instanciação do component
    ngOnInit() {
      this.eventos.push("ngOnInit foi executado.");
    }
  
    // Acontece quando algo é alterado ou refrescado no nosso component
    ngDoCheck() {
      this.eventos.push("Aconteceram alterações.");
    }
  
    executar(){
      this.texto = 'alterado';
    }
   */

  /* ----------------------------------------------------------- */

  /* Aula 42 */

  /*   novo_valor: string = 'Novo valor';
  
    constructor(){ }
  
    ngOnInit() {
      
    }
  
    ngDoCheck(){
  
    }
  
    ngOnChanges(c: SimpleChanges){
      console.log('Valor alterado');
      console.log(c);
    }
   */

  /* ----------------------------------------------------------- */

  /* Aula 43 */

  /*   nomes: string[] = ['João','Ana','Carlos'];
  
    ver: boolean = true;
   */
  /* ----------------------------------------------------------- */

  /* Aula 44 */

  nomes: string[] = ['João', 'Ana', 'Carlos'];

  ver: boolean = true;
  vercss: boolean = false;

  /* ----------------------------------------------------------- */


}
