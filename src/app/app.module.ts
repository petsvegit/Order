import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';

import { OrderService } from './order.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule],
  declarations: [ AppComponent ],
  providers:    [ OrderService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
