import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:"full"},
  {path:'home' , component:HomeComponent, 
    children:[{path:'categories' , component:ListeCategoriesComponent}]
  },
  {path:'categories' , component:ListeCategoriesComponent,children :[{path:'details', component:DetailsCategoryComponent}]},
  {path:'productsByCategory/:id',component:ProductsCategoryComponent, },
  {path:'addUser',component:UserComponent},
  {path:'addCategory', component:AddCategoryComponent},
  {path:"products",loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)},
  {path:"**" , component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
