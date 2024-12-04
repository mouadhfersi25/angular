import { Component, QueryList, ViewChildren } from '@angular/core';
import { Categorie } from '../models/categorie';
import { Shortlist } from '../models/shortlist';
import { CardComponent } from '../card/card.component';
import { CategorieService } from '../core/categorie.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories: Categorie[] = []; // Initialize as an empty array
  shorList: Shortlist[] = [];
  titre = '';

  @ViewChildren(CardComponent) cardList!: QueryList<CardComponent>;

  constructor(private catServ: CategorieService) {}

  ngOnInit(){
    this.catServ.getAllCategories().subscribe(
      (data)=> this.categories=data,
      (error)=> console.log('liste introuvable'),
      ()=> console.log('liste chargée')
    );
  }

  deleteCategorie(id:number){
    this.catServ.deleteCategory(id).subscribe(
      ()=>console.log("categorie deleted"))
  }
  ngAfterViewInit() {
    this.cardList.forEach((card) => {
      const data = this.categories.find((e) => e.id === card.id);
      if (data?.available === false) {
        card.btnText = 'Indisponible';
        card.isAvailable = false;
      } else {
        card.btnText = 'Voir Produits';
        card.isAvailable = true;
      }
    });
  }

  showDesc(description: string) {
    alert(description);
  }

  addToShortList(data: any) {
    if (this.shorList.find((e) => e.idElement === data.idElement && e.idUser === data.idUser)) {
      alert('Element déjà dans la shortList');
    } else {
      this.shorList.push({ id: 1, idUser: data.idUser, idElement: data.idElement, typeElement: 'categorie' });
    }
    console.log(this.shorList);
  }
}
