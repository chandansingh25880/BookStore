import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule } from './material/material.module';
import { LoginDisplayComponent } from './Components/login-display/login-display.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HeaderComponent } from './Components/header/header.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { FooterComponent } from './Components/footer/footer.component';
import { GetbooksComponent } from './Components/getbooks/getbooks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoginDisplayComponent,
    HeaderComponent,
    ForgetPasswordComponent,
    FooterComponent,
    GetbooksComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModule,
    MatSnackBarModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
