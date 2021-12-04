import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
  listaProductos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(
      (data) => {
        console.log(data);
        this.listaProductos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarP(id: any) {
    this.productoService.eliminarProducto(id).subscribe(
      (data) => {
        console.log('Producto eliminado con exito');
        this.obtenerProductos();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
