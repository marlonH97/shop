import { Injectable, EventEmitter } from '@angular/core';
import { } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor() { }

  $modal = new EventEmitter<any>();

}
