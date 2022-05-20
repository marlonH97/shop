import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  styleSlider: string = "margin-left:0;";
  p: number = 0;
  loading: Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  // función para mover las imagenes del slider
  moveSlider(move: number = 0) {

    let c = document.querySelectorAll(".slider-section").length;

    if (move == 2 && this.p + 1 < c) {

      this.p++;
      this.styleSlider = `margin-left: -${this.p}00%;`;

    }

    if (move == 1 && this.p > 0) {

      this.p = (this.p > 0) ? this.p - 1 : this.p;
      this.styleSlider = (this.p == 0) ? `margin-left: ${this.p};` : `margin-left: -${this.p}00%;`;

    }

  }

  ngAfterContentInit(): void {
    this.loading = false;
  }
}
