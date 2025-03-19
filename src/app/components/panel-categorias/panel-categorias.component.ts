import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { TiendaService } from '../../services/tienda.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'panel-categorias',
  imports: [CommonModule],
  templateUrl: './panel-categorias.component.html',
  styleUrl: './panel-categorias.component.css'
})
export class PanelCategoriasComponent {

  categorias$: Observable<Category[]>;

  constructor(private service: TiendaService, private router: Router) {
    this.categorias$ = this.service.recuperarCategorias$();
  }

  gotoProductsByCategory(event: Event) {
    // @ts-ignore
    const categoryCode = event.target.value;
    this.router.navigate(['categories', categoryCode, 'products']);

  }

}
