import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DataService } from '../data.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  providers: [DataService],
})
export class UserModule { }
