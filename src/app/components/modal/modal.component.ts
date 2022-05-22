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
  idRemove: string = "";
  s: number = 0;
  c: number = 0;

  constructor(private modal: ModalServiceService, private servicio: CarritoServiceService) { }

  ngOnInit(): void {

    this.productos = this.servicio.listarProductos();
    this.cal();

  }

  eliminarProducto(id: string) {

    if (!this.servicio.quitarProducto(id)) {

      this.modal.$mensaje.emit({ tipo: "warning", mensaje: "No se pudo quitar el producto" });
      return;

    }
    // this.idRemove = id;
    document.querySelector(`#${id}`)?.remove();

    setTimeout(() => {

      this.cal();
      this.modal.$mensaje.emit({tipo:"success",mensaje:"se quito el producto correctamente"});

    }, 200);

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
      this.modal.$mensaje.emit({ tipo: "success", mensaje: "Confirmación Exitosa! Gracias." });
    }

  }

  closeModal() {
    this.modal.$modal.emit(false);
  }

}
