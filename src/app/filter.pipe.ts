import { Pipe, PipeTransform } from '@angular/core';

// To make a custom pipe impure we need to pass pure key to the Pipe decorator and set it's value to false
// Angular by default will not re-run pipe whenever the data is ChangeDetectionStrategy.The pipe will only run whenever it's input changes
@Pipe({
  name: 'filter',
  pure: false
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

