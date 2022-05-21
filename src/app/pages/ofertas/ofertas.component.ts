import { Component, OnInit } from '@angular/core';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['../../../assets/css/card.css']
})

export class OfertasComponent {

  private data: CarritoInterface = { id: "", name: "", image: "", price: 0, ammount: 0, total: 0 };
  error: Boolean = false;
  resultados: any[] = [];
  loading: Boolean = true;

  constructor(private service: MasBucadosServiceService, private carrito: CarritoServiceService) {

    this.service.getProducto('promociones').subscribe((data: any) => {

     
      this.resultados = [];

      for (let i = 0; i < data.length; i++) {

        const element = data[i];
        element.visible = this.carrito.getForId(element.id);
        this.resultados.push(element);

      }

      this.loading = false;

    },
      err => { this.loading = false; }
    );


  }

  addProducto(id: string, name: string, image: string, price: number, total: number) {

    this.data.id = id;
    this.data.name = name;
    this.data.price = price;
    this.data.image = image
    this.data.ammount = 1;
    this.data.total = total;

    if (!this.carrito.agregarProducto(this.data)) {
      alert('Lo sentimos no podemos agregar este producto');
      return;
    }

    document.querySelector(`#${id}`)?.remove();

  }
}
