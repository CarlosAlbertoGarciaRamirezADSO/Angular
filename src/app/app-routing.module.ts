import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  //{path: 'contact',loadComponent:()=>import('./contact/contact.component').then((c)=> c.ContactComponent)},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'contact',component: ContactComponent},
  { path: 'formulario', loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
