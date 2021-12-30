import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LojaComponent } from './loja/loja.component';
import { StockComponent } from './stock/stock.component';

@NgModule({
  declarations: [
    AppComponent,
    LojaComponent,
    StockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
