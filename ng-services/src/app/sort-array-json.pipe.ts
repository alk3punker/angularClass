import { Pipe, PipeTransform } from '@angular/core';
import {Json} from './json.class';

@Pipe({
  name: 'sort'
})
export class SortArrayJsonPipe implements PipeTransform {

  transform(json: Json[], column: string): Json[] {
    let sortCol = column;
    return json.sort(compareFn);
    function compareFn(a: Json, b: Json): number  {
      // return 0 if a == b
      if (a[sortCol] === b[sortCol]) {return 0; }
      return (a[sortCol] > b[sortCol]) ? 1 : -1;
    }
  }

}
