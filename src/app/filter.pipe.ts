import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchedString: string, props: string): any {

    if (value.length == 0 || searchedString.length == 0)
      return value;

    const newValue = []

    for (let element of value) {
      if (element[props] === searchedString) {
        newValue.push(element)
      }
    }
    return newValue
  }
}

