import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products:Product[] = []
  productForm!:FormGroup
  idProduct:string = ''
  updateAvaliable = false

  constructor(private productService:ProductService){
    this.productForm = new FormGroup({
      name: new FormControl(''),
      quantity: new FormControl(0),
      price: new FormControl(0)
    })
  }
  ngOnInit(): void {
   this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getProducts().subscribe({
      next: res => this.products = res,
      error: err => console.log(err)
    })
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe({
      next: res => this.getAllProducts(),
      error: err => console.log(err)
    })
  }

  addProduct(){
    this.productService.addProduct(this.productForm.value).subscribe({
      next: res => {
        alert("Produto Adicinado Com Sucesso")
        this.getAllProducts()
      },
      error: err => console.log(err)
    })
  }
  onEdit(prod:Product){
    this.idProduct = prod.id
    this.updateAvaliable =  true
    this.productForm.patchValue({
      name: prod.name,
      price: prod.price,
      quantity: prod.quantity
    })
  }
  updateProduct(){
    this.productService.updateProduct(this.idProduct, this.productForm.value).subscribe({
      next: res =>{ 
        console.log(res) 
        this.updateAvaliable = false
        this.productForm.reset()
        this.getAllProducts()
        this.idProduct = ''
      },
      error: err => console.log(err)
    })
  }

}
