import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class FormularioModule { }
