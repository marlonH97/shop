import { Component, OnInit } from '@angular/core';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';

@Component({
  selector: 'app-hombre',
  templateUrl: './hombre.component.html',
  styleUrls: ['../../../assets/css/card.css']
})

export class HombreComponent implements OnInit {

  error: Boolean = false;
  resultados: any[] = [];
  loading: Boolean = true;

  constructor(private service: MasBucadosServiceService) {

    this.service.getProducto('ropa de hombres').subscribe((data: any) => {

      this.loading = false;
      this.resultados = data;

    },
      err => { this.loading = false; }
    );

  }

  ngOnInit(): void {

  }
}
