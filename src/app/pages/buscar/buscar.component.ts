import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoServiceService } from 'src/app/services/carrito-service.service';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';
import { CarritoInterface } from 'src/app/interfaces/carrito-interface';
import { ModalServiceService } from 'src/app/services/modal-service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['../../../assets/css/card.css']
})

export class BuscarComponent implements OnInit {

  private data: CarritoInterface = { id: "", name: "", image: "", price: 0, ammount: 0, total: 0 };
  resultados: any[] = [];
  loading: Boolean = true;

  constructor(private router: ActivatedRoute, private service: MasBucadosServiceService, private carrito: CarritoServiceService, private mensajes: ModalServiceService) {

    this.router.params.subscribe((params: any) => {

      this.loading = true;

      this.service.getProducto(params.search).subscribe((data: any) => {

        this.resultados = [];

        for (let i = 0; i < data.length; i++) {

          const element = data[i];
          element.visible = this.carrito.getForId(element.id);
          this.resultados.push(element);

        }

        this.loading = false;

      },
        (err) => { this.loading = false; });
    });

  }
  ngOnInit(): void {

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

    this.mensajes.$mensaje.emit({ tipo: 'success', mensaje: 'El producto se agrego al carrito' });
    document.querySelector(`#${id}`)?.remove();
  }
}
