import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDisplayComponent } from './Components/login-display/login-display.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';


const routes: Routes = [
  {
  path: '', component: LoginDisplayComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
]
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
