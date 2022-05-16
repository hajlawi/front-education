import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LogoutComponent } from './components/authentification/logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'profil',
    component:UserProfileComponent
  },
  {
    path:'se-deconnecter',
    component:LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
