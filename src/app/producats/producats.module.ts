
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllprodComponent } from './components/allprod/allprod.component';
import { ProdetailsComponent } from './components/prodetails/prodetails.component';
import { SharedModule } from '../shared/shared.module';
import { ProducatComponent } from './components/producat/producat.component';
import { RouterLink } from '@angular/router';
@NgModule({
  declarations: [  
    ProdetailsComponent,
    AllprodComponent,
    ProducatComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ],
  exports:[

  ]
})
export class ProducatsModule { }
