import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Formulario2Component } from './formulario2.component';

const routes: Routes = [{ path: '', component: Formulario2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Formulario2RoutingModule { }
