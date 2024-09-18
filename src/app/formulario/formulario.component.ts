import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { error, log } from 'console';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.sass'
})
export class FormularioComponent implements OnInit {
  
  ngOnInit(): void {
   console.log("hola mundo");
  }

  public obtener():void{
    console.log(this.formularioContacto.valid);
    console.log(this.formularioContacto.controls);
    console.log(this.formularioContacto.controls.mail.errors);

    if (this.formularioContacto.valid )
      console.log(this.formularioContacto.value);
    else
      console.log("no es valido");
  }

  
  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required, Validators.maxLength(16)])
    
  });


  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
