import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SignUpComponent {
  signUpForm: FormGroup
  constructor(formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.signUpForm = formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5),
      Validators.maxLength(8)])]
    })
  }

  ngOnInit(): void {

  }

  signUp() {
    console.log("inside here");
    console.log(this.signUpForm.value);


    this.http.post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
      .subscribe(res => {
        alert('SIGNIN SUCCESFUL');
        this.signUpForm.reset()
        this.router.navigate(["login"])
      })
  }
}
