import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  public name : string = "Marvellous";

  public num1 : number = 8;
  public num2 : number = 7;
  public today = new Date();


}
