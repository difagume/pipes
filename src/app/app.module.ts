import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para trabajar con pipe de fechas con region de pais para que no esté por defecto en-US
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-EC';

import { AppComponent } from './app.component';
//importación de pipe personalizado
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-EC' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
