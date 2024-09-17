import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto',
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.sass'
})
export class TextoComponent {
  @Input() texto!: string
}
