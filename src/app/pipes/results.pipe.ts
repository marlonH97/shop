import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'results'
})
export class ResultsPipe implements PipeTransform {

  transform(results: any): any {

    if (!results) {
      return "<h2>No hay datos para mostrar</h2>";
    }

    return null;
    
  }

}
