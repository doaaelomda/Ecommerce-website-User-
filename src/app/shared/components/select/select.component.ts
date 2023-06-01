import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() title:string | any;
  @Input() data:any[]=[]
  @Output() selectedvalue=new EventEmitter
  detectchange(event:any){
    this.selectedvalue.emit(event)
  }

}
