import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-producat',
  templateUrl: './producat.component.html',
  styleUrls: ['./producat.component.css']
})
export class ProducatComponent {
  addnum:boolean=false;
  amount:number=0;
  @Input() data!:Product
  @Output() item=new EventEmitter

  addtocart(){
    this.item.emit({item:this.data,quantity:this.amount})
  }
}
