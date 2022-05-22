import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  tipo: string = "";
  mensaje: string = "";
  color: string = "";
  show: Boolean = false;
  constructor(private service: ModalServiceService) { }

  ngOnInit(): void {

    this.service.$mensaje.subscribe((data: any) => {

      this.tipo = "";
      this.mensaje = "";
      this.color = "";
      this.show = false;

      this.mensaje = data.mensaje;
      this.tipo = data.tipo;

      switch (this.tipo) {
        case "error":
          this.color = "#dc572d";
          break;
        case "success":
          this.color = "#1A9842";
          break;
        case "warning":
          this.color = "#ECAB2A";
          break;
        default:
          this.color = "#1F2DB6";
          break;
      }

      if (this.tipo != "" && this.mensaje != "") {

        this.show = true;

      }

      setTimeout(() => {
        this.show = false;
      }, 1500);

    });



  }

  closeMensaje() {
    this.show = false;
  }

}
