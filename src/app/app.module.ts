import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { contador } from './contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
    
  
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contador
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
