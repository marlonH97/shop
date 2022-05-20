import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class MasBucadosServiceService {
  //MCO1430=>ropa yaccesorios,
  private url: string = "https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=";

  constructor(private http: HttpClient) {}

  getProducto(producto: string = "") {

    return this.http.get(this.url + producto)
      .pipe(map((data: any) => {

        return data.results;

      }));

  }

}
