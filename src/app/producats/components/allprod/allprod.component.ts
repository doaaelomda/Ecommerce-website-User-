import { Component, OnInit } from '@angular/core';
import { ProducatsService } from '../../servicess/producats.service';
import { Product } from '../../models/product';
@Component({
  selector: 'app-allprod',
  templateUrl: './allprod.component.html',
  styleUrls: ['./allprod.component.css']
})
export class AllprodComponent implements OnInit {
  loading:boolean = false
  producats:Product[]=[];
  categories:string[]=[]
  cartproducats:any[]=[]
  constructor(private ProducatsService:ProducatsService){}
  ngOnInit(): void {
    this.getproduact()
    this.getcategories()
  }
  getproduact(){
    this.loading=true
    this.ProducatsService.getAllproducats().subscribe((res:any)=>{
      this.producats=res
      this.loading=false
    },(error:any)=>{
      this.loading=false
      alert(error.message)
      
    })
  }
  getcategories(){
    this.loading=true
    this.ProducatsService.getAllcategories().subscribe((res:any)=>{
      this.categories=res
      this.loading=false
    },(error:any)=>{
      this.loading=false
      alert(error.message)})
  }
  getfilter(event:any){
    let value=event.target.value
    if(value=='all'){
      this.getproduact()
    }
    else{
    this.getpro(value)}
  }
  getpro(keyword:any){
    this.loading=true
    this.ProducatsService.getprodbycat(keyword).subscribe((res:any)=>{
      this.producats=res
      this.loading=false
    },error=>{
      this.loading=false
      alert(error.message)

    })
  }
addtocart(event:any) {
    if("cart" in localStorage) {
      this.cartproducats = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartproducats.find(item => item.item.id == event.item.id)
      if(exist) {
        alert("Product is already in your cart")
      }else {
        this.cartproducats.push(event)
        localStorage.setItem("cart" , JSON.stringify(this.cartproducats))
      }
    } else {
      this.cartproducats.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartproducats))
    }
  }
  
}