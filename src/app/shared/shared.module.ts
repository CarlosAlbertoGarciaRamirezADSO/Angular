import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoComponent } from './texto/texto.component';
import { TextoPipe } from './texto.pipe';
import { text } from 'stream/consumers';




@NgModule({
  declarations: [
    TextoComponent,
    TextoPipe,
 
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TextoComponent,
    TextoPipe
  ]
})
export class SharedModule { }
