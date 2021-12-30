import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[minhaDirective]'
})

export class minhaDirective{

    e:ElementRef;

    constructor(elemento: ElementRef){
        this.e=elemento;
        this.e.nativeElement.style.fontWeight='bold';
    }
}