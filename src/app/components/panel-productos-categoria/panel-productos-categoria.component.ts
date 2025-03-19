import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { TiendaService } from '../../services/tienda.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'panel-productos-categoria',
  imports: [CommonModule],
  templateUrl: './panel-productos-categoria.component.html',
  styleUrl: './panel-productos-categoria.component.css'
})
export class PanelProductosCategoriaComponent {

  productos$: Observable<Product[]>;
  categoryCode: string;


  constructor(private service: TiendaService, private route: ActivatedRoute) {
    // @ts-ignore
    this.categoryCode = this.route.snapshot.paramMap.get('categoryCode');
    this.productos$ = this.service.recuperarProductosPorCategoria$(this.categoryCode);
  }

}
