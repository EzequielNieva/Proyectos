import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit{

  @Input() persona: Persona;
  @Input() indice : number;

  constructor(private personasService: PersonasService){}

  ngOnInit(): void {}

  emitirSaludo(){
    this.personasService.saludar.emit(this.indice);
  }
}
