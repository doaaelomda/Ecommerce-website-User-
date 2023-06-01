import { CartsService } from './../../servuces/carts.service';
import { ProducatsService } from './../../../producats/servicess/producats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducats: any[]=[];
  total:any=0
  success:boolean=false
  constructor( private CartsService:CartsService){}
  ngOnInit(): void {
    this.getcarts()
    
  }
  getcarts(){
     if("cart" in localStorage) {
      this.cartproducats = JSON.parse(localStorage.getItem("cart")!)
  }
    this.getcarttotal()
}
  getcarttotal(){
    this.total=0;
    for (let x in this.cartproducats){
      this.total += this.cartproducats[x].item.price * this.cartproducats[x].quantity
    }
  }
  getminus(index:any){
    this.cartproducats[index].quantity--
    this.getcarttotal()
    localStorage.setItem("cart",JSON.stringify(this.cartproducats))
  }
  getplus(index:any){
    this.cartproducats[index].quantity++
    this.getcarttotal()
    localStorage.setItem("cart",JSON.stringify(this.cartproducats))

  }
  detectchange(){
    this.getcarttotal()
    localStorage.setItem("cart",JSON.stringify(this.cartproducats)) // عند الريفرش تظل كما هي

  }
  deletecart(index:number){
    this.cartproducats.splice(index,1)
    this.getcarttotal()
    localStorage.setItem("cart",JSON.stringify(this.cartproducats))
  }
  cleardata(){
    this.cartproducats=[]
    this.getcarttotal()
    localStorage.setItem("cart",JSON.stringify(this.cartproducats))
  }
  addcart(){
    let products=this.cartproducats.map((item:any)=>{
      return {productid:item.item.id,quantity:item.quantity}
    })
    let model={
      userid:5,
      data:new Date(),
      products:products
    }
    this.CartsService.createnewcart(model).subscribe((res:any)=>{
      this.success=true
      // this.cartproducats=[]
      // this.getcarttotal()
      // localStorage.setItem("cart",JSON.stringify(this.cartproducats))
    })
  }
}
