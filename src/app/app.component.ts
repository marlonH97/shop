import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from './services/modal-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'shop';
  modalSw: Boolean = false;

  constructor(private modal: ModalServiceService) { }

  ngOnInit(): void {

    this.modal.$modal.subscribe((val) => {
      this.modalSw = val;
    });

  }
}
