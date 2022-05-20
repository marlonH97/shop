import { Component, OnInit } from '@angular/core';
import { MasBucadosServiceService } from '../../services/mas-bucados-service.service';
@Component({
  selector: 'app-mas-buscados',
  templateUrl: './mas-buscados.component.html',
  styleUrls: ['./mas-buscados.component.css']
})
export class MasBuscadosComponent implements OnInit {

  dataProducts: any = [];
  styles: string = "";
  private c: number = 0;
  loading: Boolean = true;
  constructor(private service: MasBucadosServiceService) {
  }

  ngOnInit(): void {
    this.getProductos();
  }

  /**buscar los productos */

  private getProductos() {
    this.service.getProducto('').subscribe((data: any) => {
      this.dataProducts = data;
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
}
