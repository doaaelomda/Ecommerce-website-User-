import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProducatsModule } from './producats/producats.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CartsModule } from './carts/carts.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    ProducatsModule,
    AppRoutingModule,
    CartsModule 
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
