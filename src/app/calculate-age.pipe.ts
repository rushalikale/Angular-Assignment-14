import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(value: string, param : Date): string 
  {
    console.log("birthdate and todays",value,param);

    return '';
  }

}
