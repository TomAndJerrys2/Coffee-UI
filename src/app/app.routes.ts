import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainScreenComponent } from './main-screen/main-screen.component';

export const routes: Routes = [
    {path: "Login", component: LoginComponent},
];
