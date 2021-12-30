import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appNovaDirective]'
})
export class NovaDirectiveDirective implements OnInit {

  /* Aula 46 */

  /*   constructor(private elemento: ElementRef, private render: Renderer2) {
  
    }
  
    ngOnInit() {
      this.render.setStyle(this.elemento.nativeElement, 'background', 'yellow');
    }
   */

  /* ------------------------------------------------------------ */

  /* Aula 47 */

/*   constructor(private elemento: ElementRef, private render: Renderer2) { }

  ngOnInit() {
  }

  @HostListener('mouseenter') m1() {
    this.render.setStyle(this.elemento.nativeElement, 'background', 'red');
  }

  @HostListener('mouseleave') m2() {
    this.render.setStyle(this.elemento.nativeElement, 'background', 'transparent');
  }

  @HostListener('click') m3() {
    this.render.setStyle(this.elemento.nativeElement, 'background', 'green');
  }
 */
/* ------------------------------------------------------------ */

  /* Aula 48 */

  constructor(private elemento: ElementRef, private render: Renderer2) { }

  ngOnInit() {
  }

/*   @HostBinding('style.backgroundColor') corFundo: string = 'red';

  @HostListener('mouseenter') m1() {
    this.corFundo = 'yellow';
  }

  @HostListener('mouseleave') m2() {
    this.corFundo = 'red';
  }
 */

  @HostBinding('value') texto: string = '';

  @HostListener('mouseenter') colocarTexto() {
    this.texto = 'Entrei no input';
  }

  @HostListener('mouseleave') removerTexto() {
    this.texto = '';
  }


}
