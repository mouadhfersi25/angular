import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: this.fb.group({
        streetNumber: ['', Validators.required],
        city: ['', Validators.required],
        postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]]
      }),
      skills: this.fb.array([
        this.fb.control('') 
      ])
    });
  }

  
  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }

 
  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

 
  onSave() {
    console.log('Formulaire soumis :', this.profileForm.value);
  }

  onReset() {
    this.profileForm.reset();
    this.skills.clear();
    this.skills.push(this.fb.control('')); 
  }
}