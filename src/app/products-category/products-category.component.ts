import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/product';
import { Categorie } from './../Models/categorie';


@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent {
  id!:Number;
  categorie!:string;
  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
  ]

productsByCategory!: Product[] ;
  constructor(private R:ActivatedRoute){}

  ngOnInit(){ 
    
    this.id = Number(this.R.snapshot.params['id']);
    this.R.paramMap.subscribe(params => this.id= Number(params.get('id')));
    this.productsByCategory = this.listProducts.filter(p=>p.categoryId == this.id);

  
    this.categorie = String(this.R.snapshot.queryParamMap.get('name'));
    this.R.queryParamMap.subscribe(params => this.categorie= String(params.get('name')));

    

  }

 

}
