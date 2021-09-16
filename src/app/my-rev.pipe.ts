import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev'
})
export class MyRevPipe implements PipeTransform 
{

  transform(value: string, ...args: any[]): string 
  {
    //Logic to reverse string
    let rev : string = '';
    for(var i = value.length-1 ; i>=0; i--)
    {
      rev = rev + value[i];

    }
    return rev;
  }

}
