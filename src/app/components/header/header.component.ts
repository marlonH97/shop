import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.css']
})
export class HeaderComponent implements OnInit {

  search: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarProducto(input: string) {

    let val = input.trim()

    if (val != "") {
      this.router.navigate(['/buscar', val]);
    }

  }

}
