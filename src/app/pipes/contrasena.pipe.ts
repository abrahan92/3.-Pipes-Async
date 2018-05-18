import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, bool: boolean): any {

    if(bool){
      value = "*".repeat(value.length);
    }
    return value;

  }

}
