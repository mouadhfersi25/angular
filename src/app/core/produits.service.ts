import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  produits : Product[]=[]
  URL = 'http://localhost:3000/products';
  constructor(private http : HttpClient) { }
  getAllProduits(){
    return this.http .get<Product[]> (this.URL);
  }
  getProduitById(id:number){
    return this.http.get(this.URL+'/'+id);
  
    
    }
    getProduitbycategorie(idCat:number){
      return this.http.get<Product[]>(this.URL+'?categoryId='+idCat);
    }

  addProduit(produit:Product){
    return this.http.post(this.URL, produit);
  }

  deleteProduit(id:number){
    return this.http.delete(this.URL+'/'+id);
  }

  updateProduit(produit:Product){
    return this.http.put(this.URL+'/'+produit.id, produit);
  }


}