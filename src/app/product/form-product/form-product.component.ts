import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl , FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  // onSubmit(productForm:NgForm)
  // {console.log(productForm);}
  productForm = new FormGroup({
    id: new FormControl(1),
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
    image: new FormControl(''),
    categoryId: new FormControl('', Validators.required),
    description: new FormControl(''),
    price: new FormControl('', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]),
    brand: new FormControl(''),
    promotion: new FormControl('', Validators.pattern('^(0|[1-9][0-9]?)$'))
  });

  list: Product[] = [];

  onSave() {
    if (this.productForm.valid) {
    //  const newProduct: Product = this.productForm.value;
    console.log(this.productForm.value);
     // this.list.push(this.productForm.value);
      this.productForm.reset(); // Réinitialise le formulaire après l'ajout
    }
  }
}
