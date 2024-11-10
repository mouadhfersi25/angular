import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {
  description!:string;
 constructor(private R:ActivatedRoute){

 }
 ngOnInit(){
  this.R.queryParamMap.subscribe(params=>this.description=String(params.get('desc')));
 }
}
