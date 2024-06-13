import { PersonasService } from './personas.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Persona } from './persona.model';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from "./persona/persona.component";
import { FormularioComponent } from "./formulario/formulario.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule, CommonModule, PersonaComponent, FormularioComponent]
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  personas : Persona[] = [];

  constructor(private PersonasService: PersonasService){}

  ngOnInit(): void {
   this.personas = this.PersonasService.personas;
  }

}
