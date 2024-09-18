import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.sass'
})
export class Formulario2Component implements OnInit{

  ngOnInit(): void {
    console.log("hola mundo");
    
   }

  formulario2 = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(10)]),
    edad: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    sexo: new FormControl('', [Validators.required]),
    ciudad: new FormControl('', [Validators.required ]),
  })


  public obtenerdatos():void{
    console.log("su nombre es", this.formulario2.value);


    if (this.formulario2.valid)
      console.log(this.formulario2.value);
    else
      console.log("no es valido");
  }
}
