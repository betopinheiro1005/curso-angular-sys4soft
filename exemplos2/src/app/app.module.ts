import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuComponent } from './meu/meu.component';
import { JogoComponent } from './jogo/jogo.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SociosComponent } from './socios/socios.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { TesteComponent } from './teste/teste.component';
import { minhaDirective } from './Directives/minhaDirective.directive';
import { NovaDirectiveDirective } from './Directives/nova-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponent,
    JogoComponent,
    Comp1Component,
    Comp2Component,
    SociosComponent,
    NoticiaComponent,
    TesteComponent,
    minhaDirective,
    NovaDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
