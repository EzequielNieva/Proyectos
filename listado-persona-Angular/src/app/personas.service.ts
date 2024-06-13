import { EventEmitter, Injectable } from '@angular/core';
import { loggingService } from './LogginService.service';
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
  personas : Persona[] = [
    new Persona('Juan','Perez'),
    new Persona('Lara','Juarez'),
    new Persona('Karla','Lara')
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: loggingService){}

  personaAgregada(persona: Persona){
    this.loggingService.enviaMensajeAConsola("agregamos persona: " + persona.nombre)
    this.personas.push(persona);
  }
}
