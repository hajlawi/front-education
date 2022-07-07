import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LogoutComponent } from './components/authentification/logout/logout.component';
import { AllFormationComponent } from './components/formation/all-formation/all-formation.component';
import { MesFormationComponent } from './components/formation/mes-formation/mes-formation.component';
import { AddFormationComponent } from './components/formation/add-formation/add-formation/add-formation.component';
import { MonProfilComponent } from './components/mon-profil/mon-profil.component';
import { SciencesExperimentalesComponent } from './matiere/sciences-experimentales/sciences-experimentales..component';
import { DocumentComponent } from './matiere/document/document.component';
import { MathematiquesComponent } from './matiere/mathematiques/mathematiques.component';
import { LettresComponent } from './matiere/lettres/lettres.component';
import { TechniqueComponent } from './matiere/technique/technique.component';
import { InformatiqueComponent } from './matiere/informatique/informatique.component';
import { EconomieGestionComponent } from './matiere/economie-gestion/economie-gestion.component';
import { PasswordForgottenComponent } from './components/authentification/password-forgotten/password-forgotten.component';
import { ResetPasswordComponent } from './components/authentification/reset-password/reset-password.component';

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
  {
    path:'formation',
    component:AllFormationComponent
  },
  {
    path:'mes-formation',
    component:MesFormationComponent
  },{
    path:'ajout-formation',
    component:AddFormationComponent
  },
  {
    path:'mon-profil',
    component:MonProfilComponent
  },
  {
    path:'Sciences-Experimentales',
    component:SciencesExperimentalesComponent
  },
  {
    path:'document/:id',
    component:DocumentComponent
  },
  {
    path:'Mathematiques',
    component:MathematiquesComponent
  },
  {
    path:'Lettres',
    component:LettresComponent
  },
  {
    path:'Technique',
    component:TechniqueComponent
  },
  {
    path:'Informatique',
    component:InformatiqueComponent
  },
  {
    path:'Economie-gestion',
    component:EconomieGestionComponent
  },

  {

    path:'passwordForotten',
    component:PasswordForgottenComponent
  },

  {
    path:'reset_password/:token',
    component:ResetPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
