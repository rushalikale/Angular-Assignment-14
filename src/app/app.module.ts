import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//After generating Pipe 
//Pipe For reverse string
import { MyRevPipe } from './my-rev.pipe';
//Pipe For Addition
import { MyAddPipe } from './my-add.pipe';
//Pipe For Multiplication
import { MyMultPipe } from './my-mult.pipe';
//Pipe For Numbers to check Prime, Odd, Even or Perfect
import { MarvellousChkPipe } from './marvellous-chk.pipe';
//Pipe For Calculate age
import { CalculateAgePipe } from './calculate-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyRevPipe,
    MyAddPipe,
    MyMultPipe,
    MarvellousChkPipe,
    CalculateAgePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
