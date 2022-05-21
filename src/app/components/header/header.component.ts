import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.css',
    './header.component.css']
})

export class HeaderComponent implements OnInit {

  style: string = "";
  search: string = "";
  products: any[] = [];
  constructor(private router: Router, private modal: ModalServiceService, private carrito: CarritoServiceService) {
    this.products = this.carrito.listarProductos();
  }

  ngOnInit(): void {

    this.carrito.$carrito.subscribe((datos) => {
      this.products = datos;
    });

  }

  buscarProducto(input: string) {

    let val = input.trim()

    if (val != "") {
      this.router.navigate(['/buscar', val]);
    }

  }

  openModal() {

    if (this.products.length != 0) {
      this.modal.$modal.emit(true);
    }

  }

  showMenu() {

  }

}
