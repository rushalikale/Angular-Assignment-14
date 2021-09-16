import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param: string): string 
  {
    let str : string ='';
    //Logic for Even number or not
    if(param === 'Even')
    {
      if(value %2 === 0)
      {
        str = str + value +" number is Even";
      }
      else
      {
        str = str + value +" number is Not Even";
      }
    }
    //Logic for Odd number or not
    if(param === 'Odd')
    {
      if(value %2 != 0)
      {
        str = str + value +" number is Odd";
      }
      else
      {
        str = str + value +" number is Not Odd";
      }
    }
    //Logic for Prime number or not
    if(param === 'Prime')
    {
      let flag : boolean = false;
      if(value > 2)
      {
        for(let i = 2 ; i < value/2 ; i++ )
        {
          if(value % i === 0)
          {
            flag = true;
            break;
          }
        } 
      }
      if(flag === false)
      {
        str = str + value +" number is Prime";
      }
      else{
        str = str + value +" number is Not Prime";
      }
    }
    //Logic for Perfect number or not
    if(param === 'Perfect')
    {
      let divisiors : number[] = [];
      let match : number = 0;
      for(let i = 1; i < value ; i++)
      {
        if(value % i === 0)
        {
          divisiors.push(i);
        }
      }
      for(let j = 0;j < divisiors.length; j++)
      {
        match = match + divisiors[j];
      }

      if(match === value)
      {
        str = str + value +" number is Perfect";
      }
      else
      {
        str = str + value +" number is Not Perfect";
      }
    }
    
    return str;
  }

}
