import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ProducatsService {

  constructor( private http:HttpClient) { }
  getAllproducats(){
    return this.http.get(environment.baseApi+'products')

  }
  getAllcategories(){
    return this.http.get(environment.baseApi+'products/categories')
  }
  getprodbycat(keyword:any){
    return this.http.get(environment.baseApi +'products/category/'+keyword)
  }
  getid(id:any){
    return this.http.get(environment.baseApi +'products/'+id)
  }
}
