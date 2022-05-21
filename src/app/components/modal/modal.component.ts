import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  productos: any[] = [];
  s: number = 0;
  c: number = 0;

  constructor(private modal: ModalServiceService, private servicio: CarritoServiceService) { }

  ngOnInit(): void {

    this.productos = this.servicio.listarProductos();
    this.cal();

  }

  eliminarProducto(id: string) {

    if (!this.servicio.quitarProducto(id)) {
      alert('No se pudo quitar el producto');
      // return;
    }

    document.querySelector(`#${id}`)?.remove();
    this.cal();

  }

  // calcular totales
  cal() {

    this.c = 0;
    this.s = 0;
    let datos = this.servicio.listarProductos();

    datos.forEach((e: any) => {
      this.c++;
      this.s += e.price;
    });

    this.servicio.$carrito.emit(datos);

    if (this.s == 0) {
      this.closeModal();
    }

  }

  confirmar() {

    if (confirm('¿esta seguro que desea confirmar la compra?')) {
      this.servicio.eliminarCarrito();
      this.cal();
    }
    
  }

  closeModal() {
    this.modal.$modal.emit(false);
  }

}
