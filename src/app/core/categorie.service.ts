import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie';
import { HttpClient } from '@angular/common/http';
import { ProduitsService } from './produits.service';


@Injectable({
  providedIn: 'root' //visiblity tout le projet (composants et modules)
})


export class CategorieService {

  categories : Categorie[]=[]
  URL = 'http://localhost:3000/categories';
  constructor(private http: HttpClient, private productS:ProduitsService) { }

  getAllCategories(){
    return this.http.get<Categorie[]>(this.URL) ;
  }
  getCategoryById(id:number){
    return this.http.get(this.URL+'/'+id);
  
    
    }

  addCategory(categorie:Categorie){
    return this.http.post(this.URL, categorie);
  }

  deleteCategory(id:number){
  //delete des produits par categorie
    this.productS.getProduitbycategorie(id).subscribe(
      data => {
        data.forEach(p => this.productS.deleteProduit(p.id).subscribe())
          
      }
    )

    return this.http.delete(this.URL+'/'+id);
  }

  updateCategory(categorie:Categorie){
    
    return this.http.put(this.URL+'/'+categorie.id, categorie);
  }


}