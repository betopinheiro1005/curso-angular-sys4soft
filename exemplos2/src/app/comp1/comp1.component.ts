import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
