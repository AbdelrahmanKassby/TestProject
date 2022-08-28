import { Component, NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import {HomePageComponent} from '../app/home-page/home-page.component';



const routes: Routes = [
 {   path:'',
  component: AppComponent,
  children:[
    {
      path:'',
      component:SignInFormComponent
    }
  ]
},
  // {path:'SigninForm',component:SignInFormComponent},
  {path:'HomePage',component:HomePageComponent}

]

// const routes: Routes = [{
//   path:'',
//   component: AppComponent,
//   children:[
//     {
//       path:'',
//       component:SignInFormComponent
//     }
//   ]
// }
// ];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
