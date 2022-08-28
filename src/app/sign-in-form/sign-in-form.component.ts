import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  public showPassword: boolean = false;
  loginForm: FormGroup;
  //router : Router;
  hide = true;
  savedEmail:string= "aa@aa";
  savedPassword:string= "123";
  Authorized:boolean=false;
  emaill: string;
  passwordd: string;
  constructor(private router :Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('',[Validators.required,Validators.minLength(3)])
      }

      
    );
  }


  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  get email()
  {
    return this.loginForm.get('email');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  onLogin()
  {
    debugger
    if(this.email.status=="VALID")
    {
      if(this.emaill==this.savedEmail && this.passwordd==this.savedPassword)
      {
          console.log("waslna al khartom");
           this.Authorized = true;
           this.router.navigate(['/HomePage']);
      }
      else
         ("Ghalat ya ***")
    }
    else
      console.log("NotValid");
  }
}
