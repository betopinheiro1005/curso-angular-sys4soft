import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent {

  total_ananases: number = 0;
  total_bananas: number = 0;
  total_laranjas: number = 0;

  AdicionarAnanas(){
    this.total_ananases++;
  }

  RemoverAnanas(){
    if(this.total_ananases > 0){
      this.total_ananases--;
    }
  }

  AdicionarBanana(){
    this.total_bananas++;
  }

  RemoverBanana(){
    if(this.total_bananas > 0){
      this.total_bananas--;
    }  
  }

  AdicionarLaranja(){
    this.total_laranjas++;
  }

  RemoverLaranja(){
    if(this.total_ananases > 0){
      this.total_laranjas--;
    }  
  }

  Calcular_Total(){
    return this.total_ananases + this.total_bananas + this.total_laranjas;
  }

  /* Estilos */

  EstiloAnanases(){
    let estilo = 'black';

    if(this.total_ananases <= 0){
      estilo = 'red';
      return estilo;
    }
  }

  EstiloBananas(){
    let estilo = 'black';
    if(this.total_bananas <= 0){
      estilo = 'red';
      return estilo;
    }
  }

  EstiloLaranjas(){
    let estilo = 'black';

    if(this.total_laranjas <= 0){
      estilo = 'red';
      return estilo;
    }
  }

}
