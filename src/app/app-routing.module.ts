import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllprodComponent } from './producats/components/allprod/allprod.component';
import { ProdetailsComponent } from './producats/components/prodetails/prodetails.component';

const routes: Routes = [
  {path:"products" , component:AllprodComponent},
  {path:"details/:id" , component:ProdetailsComponent},
  {path:'cart' , component:CartComponent},
  {path:"**" , redirectTo:"products" , pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }