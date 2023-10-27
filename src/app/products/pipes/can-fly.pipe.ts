import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'canFly'
})
export class CanFly implements PipeTransform {

  transform(value: boolean): 'fly' | 'no fly' {
    return value ? 'fly' : 'no fly'
  }

}
