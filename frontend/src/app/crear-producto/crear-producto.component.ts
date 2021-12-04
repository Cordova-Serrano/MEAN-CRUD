import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css'],
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear Producto';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {
    this.productoForm = this.fb.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      sistemaop: ['', Validators.required],
      especificaciones: ['', Validators.required],
      stock: ['', Validators.required],
      precio: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      marca: this.productoForm.get('marca')?.value,
      modelo: this.productoForm.get('modelo')?.value,
      sistemaop: this.productoForm.get('sistemaop')?.value,
      especificaciones: this.productoForm.get('especificaciones')?.value,
      stock: this.productoForm.get('stock')?.value,
      precio: this.productoForm.get('precio')?.value,
    };

    if (this.id !== null) {
      this.productoService.editarProducto(this.id, PRODUCTO).subscribe(
        (data) => {
          console.log('Producto Actualizado');
          this.router.navigate(['/inventario']);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    } else {
      console.log(PRODUCTO);
      this.productoService.guardarProducto(PRODUCTO).subscribe(
        (data) => {
          console.log('Producto subido con exito');
          this.router.navigate(['/inventario']);
        },
        (error) => {
          console.log(error);
          this.productoForm.reset();
        }
      );
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this.productoService.obtenerProducto(this.id).subscribe((data) => {
        this.productoForm.setValue({
          marca: data.marca,
          modelo: data.modelo,
          sistemaop: data.sistemaop,
          especificaciones: data.especificaciones,
          stock: data.stock,
          precio: data.precio,
        });
      });
    }
  }
}
