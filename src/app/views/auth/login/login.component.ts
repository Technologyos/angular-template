import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

import { RouterLink } from '@angular/router'
import { NgClass, NgIf } from '@angular/common'
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, NgClass, NgIf],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  signInForm!: UntypedFormGroup
  submitted: boolean = false

  errorMessage: string = ''

  public fb = inject(UntypedFormBuilder)
  private auth = inject(AuthService)

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['asalazarj', [Validators.required]],
      password: ['Temporal@32', [Validators.required]],
    })
  }

  get formValues() {
    return this.signInForm.controls
  }

  login() {
    this.submitted = true
    if (this.signInForm.valid) {
      const email = this.formValues['email'].value
      const password = this.formValues['password'].value

      console.log(email)
      console.log(password)

      this.auth.login(email, password).subscribe
    }
  }
}
