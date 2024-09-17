import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.sass'
})
export class FormularioComponent implements OnInit {
  
  ngOnInit(): void {
   console.log("hola mundo");
   this.formularioContacto.controls["nombre"].setValue("erley");
  }

  public obtener():void{
    console.log(this.formularioContacto.valid);
    console.log(this.formularioContacto);

    if (this.formularioContacto.valid)
      console.log(this.formularioContacto.value);
    else
      console.log("no es valido");
  }

  
  resultado!: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required, Validators.maxLength(500)])
  });


  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
