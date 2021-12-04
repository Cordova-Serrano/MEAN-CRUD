export class Producto {
  _id?: number;
  marca: string;
  modelo: string;
  sistemaop: string;
  especificaciones: string;
  stock: number;
  precio: number;

  constructor(
    marca: string,
    modelo: string,
    sistemaop: string,
    especificaciones: string,
    stock: number,
    precio: number
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.sistemaop = sistemaop;
    this.especificaciones = especificaciones;
    this.stock = stock;
    this.precio = precio;
  }
}
