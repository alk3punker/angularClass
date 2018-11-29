import { Pipe, PipeTransform } from '@angular/core';
import { Json } from './json.class';

@Pipe({
  name: 'search'
})
export class SearchJsonPipe implements PipeTransform {

  transform(json: Json[], searchCriteria: string): Json[] {
    let newJson: Json[] = [];
    for(let j of json) {
      if (j.name.includes(searchCriteria) || j.role.includes(searchCriteria)) {
        newJson.push(j);
      }
    }
    return newJson;
  }

}
