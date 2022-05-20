import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasBucadosServiceService } from 'src/app/services/mas-bucados-service.service';
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['../../../assets/css/card.css']
})
export class BuscarComponent implements OnInit {

  resultados: any[] = [];
  loading: Boolean = true;
  constructor(private router: ActivatedRoute, private service: MasBucadosServiceService) {

    this.router.params.subscribe((params: any) => {

      this.loading = true;
      
      this.service.getProducto(params.search).subscribe((data: any) => {

        this.loading = false;
        this.resultados = data;

      },
        (err) => { this.loading = false; });
    });

  }
  ngOnInit(): void {

  }
}
