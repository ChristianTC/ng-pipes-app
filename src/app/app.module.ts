import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Config locale in the APP
import LocaleEsBo from '@angular/common/locales/es-BO';
import LocaleIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocaleEsBo);
registerLocaleData(LocaleIt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-BO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
