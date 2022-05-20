import { Component, OnInit } from '@angular/core';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';

@Component({
  selector: 'app-mujer',
  templateUrl: './mujer.component.html',
  styleUrls: ['../../../assets/css/card.css']
})

export class MujerComponent implements OnInit {

  error: Boolean = false;
  resultados: any[] = [];
  loading: Boolean = true;

  constructor(private service: MasBucadosServiceService) {

    this.service.getProducto('ropa de mujer').subscribe((data: any) => {

      this.loading = false;
      this.resultados = data;

    },
      err => { this.loading = false; }
    );

  }


  ngOnInit(): void {
  }

}
