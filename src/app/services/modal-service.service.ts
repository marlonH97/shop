import { Injectable, EventEmitter } from '@angular/core';
import { } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }
  //observable para mostrar modal
  $modal = new EventEmitter<any>();
  //observable para mostrar mensaje
  $mensaje = new EventEmitter<any>();
}
