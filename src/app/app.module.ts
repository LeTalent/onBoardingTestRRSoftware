import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http'


//import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { hammerjs } from 'hammerjs';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatPaginatorModule,
    MatCardModule, HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
