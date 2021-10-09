import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDisplayComponent } from './Components/login-display/login-display.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HeaderComponent } from './Components/header/header.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetbooksComponent } from './Components/getbooks/getbooks.component';


const routes: Routes = [
  {
  path: '', component: LoginDisplayComponent,


    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
]
  },
  
  { path: 'header', component: HeaderComponent},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'footer', component:  FooterComponent},
  { path: 'getbooks', component:  GetbooksComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
