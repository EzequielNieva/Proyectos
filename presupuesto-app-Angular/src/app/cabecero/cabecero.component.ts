import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  @Input() presupuestoTotal:number=0;
  @Input() ingresoTotal:number=0;
  @Input() egresoTotal:number=0;
  @Input() porcentajeTotal:number=0;

}
