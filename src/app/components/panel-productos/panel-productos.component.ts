import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-productos',
  imports: [CommonModule],
  templateUrl: './panel-productos.component.html',
  styleUrl: './panel-productos.component.css'
})
export class PanelProductosComponent {

  productos$: Observable<Product[]>;

  constructor(private service: TiendaService) {
    this.productos$ = this.service.recuperarProductos$();
  }

}
