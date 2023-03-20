import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginSignupService } from '../login-signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(formbuilder: FormBuilder,
    private router: Router, private loginSignupService: LoginSignupService) {

    this.loginForm = formbuilder.group({
      email: ['',Validators.compose([Validators.required,Validators.email])],
      password: ['', Validators.compose([Validators.required,Validators.minLength(5),
      Validators.maxLength(8)])]
    })
  }
  ngOnInit() {

  }

  onSubmit() {
    this.loginSignupService.login().subscribe((res) => {

      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if (user) {
        this.loginForm.reset()
        this.router.navigate(['/product'])
      } else {
        alert("user not found");
        this.loginForm.reset()
      }
    })
  }
}



