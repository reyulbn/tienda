import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, tap } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

type ProductoDTO = {
  title: string,
  description: string,
  thumbnail: string,
}

type CategoriaDTO = {
  slug: string,
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient) { }

  recuperarProductos$(): Observable<Product[]> {
    return this.http.get<ProductoDTO>('https://dummyjson.com/products?limit=0').pipe(
      tap(console.log),
      map(data => data.products),
      delay(2000),
    );
  }

  recuperarCategorias$(): Observable<Category[]> {
    return this.http.get<CategoriaDTO>('https://dummyjson.com/products/categories').pipe(
      tap(console.log),
      delay(2000),
    );
  }

  recuperarProductosPorCategoria$(categoryCode: string): Observable<Product[]> {
    return this.http.get<ProductoDTO>(`https://dummyjson.com/products/category/${categoryCode}?limit=0`).pipe(
      tap(console.log),
      map(data => data.products),
      delay(2000),
    );
  }

  recuperarProductoConcreto$(): Observable<Product> {
    return this.http.get<ProductoDTO>('https://dummyjson.com/product/81').pipe(
      tap(console.log),
      delay(2000),
    );
  }

}
