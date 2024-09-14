import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "http://localhost:3000/products"

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.url);
  }

  deleteProduct(id:string):Observable<any>{
    return this.httpClient.delete<any>(`${this.url}/${id}`)
  }

  addProduct(Product:Product):Observable<Product>{
    return this.httpClient.post<Product>(this.url, Product)
  }
  updateProduct(id:string, product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${this.url}/${id}`, product)
  }
  

  
}
