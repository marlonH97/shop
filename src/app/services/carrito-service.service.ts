import { IfStmt } from '@angular/compiler';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoInterface } from '../interfaces/carrito-interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {


  data: CarritoInterface = { id: "", name: "", image: "", price: 0, ammount: 0, total: 0 };
  constructor() { }

  agregarProducto(data: CarritoInterface): any {

    let datos = this.listarProductos();

    let products = [];
    let b = true;

    if (datos.length == 0) {

      products = [data];

    } else {

      for (let i = 0; i < datos.length; i++) {

        const element = datos[i];

        if (element.id == data.id) {

          b = false;
          element.ammount = data.ammount + element.ammount;

        }

        if (element.ammount > data.total) {
          return false;
        }

        products.push(element);

      }

      if (b) products.push(data);


    }
    this.$carrito.emit(products);
    localStorage.setItem('cart', JSON.stringify(products));

    return true;

  }


  getForId(id: string) {

    let data = this.listarProductos();

    for (let i = 0; i < data.length; i++) {

      const el = data[i];

      if (el.id == id) {

        return true;

      }

    }

    return false;

  }

  quitarProducto(id: string) {

    let datos = this.listarProductos();
    let products = [];
    let v = false;

    for (let i = 0; i < datos.length; i++) {

      const element = datos[i];

      if (element.id != id) {
        products.push(element);
      } else {
        v = true;
      }

    }

    localStorage.setItem('cart', JSON.stringify(products));

    return v;

  }

  eliminarCarrito() {
    localStorage.removeItem('cart');

  }

  listarProductos() {
    let json = localStorage.getItem('cart');
    if (!json) {
      return [];
    }
    return JSON.parse(json || "");
  }



  $carrito = new EventEmitter<any>();

}
