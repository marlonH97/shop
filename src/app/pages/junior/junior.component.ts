import { Component, OnInit } from '@angular/core';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';

@Component({
  selector: 'app-junior',
  templateUrl: './junior.component.html',
  styleUrls: ['../../../assets/css/card.css']
})
export class JuniorComponent implements OnInit {

  error: Boolean = false;
  resultados: any[] = [];
  loading: Boolean = true;

  constructor(private service: MasBucadosServiceService) {

    this.service.getProducto('joven').subscribe((data: any) => {

      this.loading = false;
      this.resultados = data;

    },
      err => { this.loading = false; }
    );

  }


  ngOnInit(): void {
  }

}
