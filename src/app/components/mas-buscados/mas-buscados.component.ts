import { Component, OnInit } from '@angular/core';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';
import { MasBucadosServiceService } from '../../services/mas-bucados-service.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { ModalServiceService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-mas-buscados',
  templateUrl: './mas-buscados.component.html',
  styleUrls: ['./mas-buscados.component.css']
})
export class MasBuscadosComponent {

  dataProducts: any = [];
  styles: string = "";
  private c: number = 0;
  loading: Boolean = true;
  private data: CarritoInterface = { id: "", name: "", image: "", price: 0, ammount: 0, total: 0 };
  constructor(private service: MasBucadosServiceService, private carrito: CarritoServiceService, private mensajes: ModalServiceService) {
    this.getProductos();
  }

  private getProductos() {

    this.service.getProducto('').subscribe((data: any) => {

      for (let i = 0; i < data.length; i++) {

        const element = data[i];
        element.visible = this.carrito.getForId(element.id);
        this.dataProducts.push(element);

      }

      this.loading = false;
    });
  }

  move(d: number = 0) {

    let t: number = this.dataProducts.length;
    // next
    if (d == 2) {

      this.c = (this.c <= (t * 22)) ? this.c + 22 : this.c;
      this.styles = `margin-left: -${this.c}em;`;

    }
    // back
    if (d == 1) {

      this.c = (this.c > 22) ? this.c - 23 : this.c;
      this.styles = (this.c <= 23) ? `margin-left:0;` : `margin-left: -${this.c}em;`;
    }

  }

  addProducto(id: string, name: string, image: string, price: number, total: number) {

    this.data.id = id;
    this.data.name = name;
    this.data.price = price;
    this.data.image = image
    this.data.ammount = 1;
    this.data.total = total;

    if (!this.carrito.agregarProducto(this.data)) {
      this.mensajes.$mensaje.emit({ tipo: 'warning', mensaje: 'Lo sentimos no podemos agregar este producto' });
      return;
    }

    document.querySelector(`#${id}`)?.remove();
    this.mensajes.$mensaje.emit({ tipo: 'success', mensaje: 'El producto se agrego al carrito' });

  }
}
