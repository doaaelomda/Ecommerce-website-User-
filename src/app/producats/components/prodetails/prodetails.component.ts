import { ProducatsService } from './../../servicess/producats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodetails',
  templateUrl: './prodetails.component.html',
  styleUrls: ['./prodetails.component.css']
})
export class ProdetailsComponent implements OnInit {
  id:any
  data:any
  loading:boolean=false
  constructor(private route:ActivatedRoute,private ProducatsService:ProducatsService){
    this.id=this.route.snapshot.paramMap.get('id');
  }
  ngOnInit() {
    this.getpro()
  }
  getpro(){
    this.loading=true
    this.ProducatsService.getid(this.id).subscribe((res:any)=>{
      this.loading=false
      this.data=res
    },(error:any)=>{
      this.loading=false
      alert(error.message)
    })
  }

}
