import { loggingService } from '../LogginService.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { FormsModule } from '@angular/forms';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  providers:[loggingService]
})
export class FormularioComponent {

  nombreInput: string ='';
  apellidoInput: string ='';

  constructor(private loggingService:loggingService,private personasService: PersonasService){
    this.personasService.saludar.subscribe((indice:number)=> alert("El indice es: " + indice));
  }

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personasService.personaAgregada(persona1);
  }
}
