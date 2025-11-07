import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePedido } from './components/liste-pedido/liste-pedido';
import { NuevoPedido } from './components/nuevo-pedido/nuevo-pedido';



@NgModule({
  declarations: [
    ListePedido,
    NuevoPedido
  ],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }
