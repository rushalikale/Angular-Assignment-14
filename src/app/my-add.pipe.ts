import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, param: any): number 
  {
    //Logic for addition
    let add : number = 0;
    add = value + <number>param;
    return add;
  }

}
