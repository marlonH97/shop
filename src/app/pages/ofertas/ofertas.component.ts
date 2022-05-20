import { Component, OnInit } from '@angular/core';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['../../../assets/css/card.css']
})

export class OfertasComponent {

  error: Boolean = false;
  resultados: any[] = [];
  loading: Boolean = true;

  constructor(private service: MasBucadosServiceService) {

    this.service.getProducto('promociones').subscribe((data: any) => {

      this.loading = false;
      this.resultados = data;

    },
      err => { this.loading = false; }
    );


  }
}
