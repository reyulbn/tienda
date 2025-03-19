import { Routes } from '@angular/router';
import { PanelCategoriasComponent } from './components/panel-categorias/panel-categorias.component';
import { PanelProductosComponent } from './components/panel-productos/panel-productos.component';
import { PanelProductosCategoriaComponent } from './components/panel-productos-categoria/panel-productos-categoria.component';
import { PanelProductoConcretoComponent } from './components/panel-producto-concreto/panel-producto-concreto.component';
import { PanelCategoriasProductosComponent } from './components/panel-categorias-productos/panel-categorias-productos.component';

export const routes: Routes = [
  { path: 'categories', component: PanelCategoriasComponent },
  { path: 'products', component: PanelProductosComponent },
  { path: 'categories/:categoryCode/products', component: PanelProductosCategoriaComponent },
  { path: 'producto-concreto', component: PanelProductoConcretoComponent },
  { path: 'categories-products', component: PanelCategoriasProductosComponent },
];
