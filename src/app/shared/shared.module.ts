import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SpliterComponent } from './components/spliter/spliter.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    SpliterComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    SpliterComponent,
    SelectComponent,
    FormsModule
    
  ]
})
export class SharedModule { }
