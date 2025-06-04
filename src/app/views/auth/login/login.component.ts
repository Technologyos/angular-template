import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

import { RouterLink } from '@angular/router'
import { NgClass } from '@angular/common'

@Component({
  selector: 'login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  signInForm!: UntypedFormGroup
  submitted: boolean = false

  errorMessage: string = ''

  get formValues() {
    return this.signInForm.controls
  }

  login() {
    console.log('login...')
  }
}
