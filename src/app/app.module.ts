import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { FormularioModule } from './formulario/formulario.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Formulario2Module } from './formulario2/formulario2.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, 
    FormularioModule,
    ReactiveFormsModule,
    Formulario2Module

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
