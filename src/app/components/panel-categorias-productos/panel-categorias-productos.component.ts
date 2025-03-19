import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-categorias-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-categorias-productos.component.html',
  styleUrl: './panel-categorias-productos.component.css'
})
export class PanelCategoriasProductosComponent {
  categorias$: Observable<Category[]>;
  productos$: Observable<Product[]> | undefined;

  constructor(private service: TiendaService) {
    this.categorias$ = this.service.recuperarCategorias$();
  }

  onCategorySelect(event: Event) {
    // @ts-ignore
    const categoryCode = event.target.value;
    if (categoryCode) {
      this.productos$ = this.service.recuperarProductosPorCategoria$(categoryCode);
    }
  }
}