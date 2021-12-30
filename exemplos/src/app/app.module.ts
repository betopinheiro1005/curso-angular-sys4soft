import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SocioComponent } from './socio/socio.component';
import { ClubeComponent } from './clube/clube.component';

@NgModule({
  declarations: [
    AppComponent,
    SocioComponent,
    ClubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
