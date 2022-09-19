import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavhomeComponent } from './navhome/navhome.component';
import { NavsignupComponent } from './navsignup/navsignup.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'navhome',component:NavhomeComponent},
  {path:'navsignup',component:NavsignupComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
