import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, param: any): number 
  {
    //Logic for Multiplication
    let mult : number =0;
    mult = value * <number>param;
    return mult;
  }

}
