import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(ilstItems: any[], txt: any[]): unknown {
    return null;
  }

}
