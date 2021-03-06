import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'subString'
})
export class SubStringPipe implements PipeTransform {

  transform(value: string, max: number): unknown {
    if (value.length > max) {
      return value.slice(0, max) + '...';
    }
    return value;
  }

}
