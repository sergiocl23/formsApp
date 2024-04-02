import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required ]],
    username: ['', [ Validators.requiredTrue ]],
    password: ['', [ Validators.requiredTrue, Validators.minLength(6) ]],
    password2: ['', [ Validators.requiredTrue ]],
  });

  constructor( private fb: FormBuilder ){}

  isValidField( field: string ){
    // TODO: obtener validacion desde un servicio
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}
