import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class ProductosComponent implements OnInit {
  products: any[] = [];
  newProduct = {
    codigo_producto: '',
    nombre_producto: '',
    precio: 0
  };

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    });
  }

  addProduct(): void {
    this.productsService.createProduct(this.newProduct).subscribe({
      next: (response) => {
        console.log('Producto creado con éxito', response);
        this.getProducts(); // Actualiza la lista
      },
      error: (error) => {
        console.error('Error al crear producto:', error);
      }
    });
  }
}
