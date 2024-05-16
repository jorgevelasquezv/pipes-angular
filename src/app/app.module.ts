import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import localEsCO from '@angular/common/locales/es-CO';
import localEsMX from '@angular/common/locales/es-MX';
import localItVA from '@angular/common/locales/it-VA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsCO);
registerLocaleData(localEsMX);
registerLocaleData(localItVA);
@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
