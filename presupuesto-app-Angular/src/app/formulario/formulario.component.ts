import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  tipo:String="ingresoOperacion";
  descripcionInput:String="";
  valorInput:number=0;

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){}

  tipoOperacion(event: Event): void {
    if (event.target) {
      const valorSeleccionado = (event.target as HTMLSelectElement).value;
      this.tipo = valorSeleccionado;
    }
  }
  agregarValor(){
    if (this.tipo === "ingresoOperacion"){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    }else{
    this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }
}
