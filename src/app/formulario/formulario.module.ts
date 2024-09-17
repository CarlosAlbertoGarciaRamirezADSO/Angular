import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioComponent,
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap:[]
})
export class FormularioModule { }
