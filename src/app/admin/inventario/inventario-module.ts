import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from './components/producto/producto';
import { Categoria } from './components/categoria/categoria';
import { Cliente } from './cliente/cliente';



@NgModule({
  declarations: [
    Producto,
    Categoria,
    Cliente
  ],
  imports: [
    CommonModule
  ]
})
export class InventarioModule { }
