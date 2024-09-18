import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Formulario2RoutingModule } from './formulario2-routing.module';
import { Formulario2Component } from './formulario2.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Formulario2Component
  ],
  imports: [
    CommonModule,
    Formulario2RoutingModule, 
    ReactiveFormsModule
  ]
})
export class Formulario2Module { }
