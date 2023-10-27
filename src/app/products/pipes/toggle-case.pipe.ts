import { Pipe, PipeTransform } from "@angular/core";

// John Doe | toogleCase = 'JOHN DOE'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false ):string {
    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
