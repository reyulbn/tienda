import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-producto-concreto',
  imports: [CommonModule],
  templateUrl: './panel-producto-concreto.component.html',
  styleUrl: './panel-producto-concreto.component.css'
})
export class PanelProductoConcretoComponent {

  producto$: Observable<Product>;

  constructor(private service: TiendaService) {
    this.producto$ = this.service.recuperarProductoConcreto$();
  }

}
