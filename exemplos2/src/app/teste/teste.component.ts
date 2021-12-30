import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  /* Aula 42 */

  @Input() valor: string ='valor original';

  constructor() { }

  ngOnInit() {
  }


}
