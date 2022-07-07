import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { NavHeaderComponent } from './components/header/nav-header/nav-header.component';
import {FooterComponent} from "./components/footer/footer.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { LogoutComponent } from './components/authentification/logout/logout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ModalModule } from 'ngx-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreModule } from '@ngrx/store';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MesFormationComponent } from './components/formation/mes-formation/mes-formation.component';
import { AllFormationComponent } from './components/formation/all-formation/all-formation.component';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import { AddFormationComponent } from './components/formation/add-formation/add-formation/add-formation.component';
import { MonProfilComponent } from './components/mon-profil/mon-profil.component';
import {DialogModule} from 'primeng/dialog';
import { UpdateProfilDialogComponent } from './components/mon-profil/update-profil-dialog/update-profil-dialog.component';
import { EconomieGestionComponent } from './matiere/economie-gestion/economie-gestion.component';
import { MathematiquesComponent } from './matiere/mathematiques/mathematiques.component';
import { TechniqueComponent } from './matiere/technique/technique.component';
import { SciencesExperimentalesComponent } from './matiere/sciences-experimentales/sciences-experimentales..component';
import { DocumentComponent } from './matiere/document/document.component';
import { LettresComponent } from './matiere/lettres/lettres.component';
import { InformatiqueComponent } from './matiere/informatique/informatique.component';
import { AjoutDocumentComponent } from './matiere/document/ajout-document/ajout-document.component';
import { PasswordForgottenComponent } from './components/authentification/password-forgotten/password-forgotten.component';
import { ResetPasswordComponent } from './components/authentification/reset-password/reset-password.component';
import { NbThemeModule,NbIconModule,NbFormFieldModule, NbInputModule, NbCardModule, NbLayoutModule, NbSelectModule } from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {ToastModule} from 'primeng/toast';
import { FormService } from './service/FormService.service';
import { MessageService } from 'primeng/api';
import { AjoutMeetingComponent } from './components/meeting/ajoutMeeting/ajout-meeting/ajout-meeting.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    NavHeaderComponent,
    WelcomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    UserProfileComponent,
    MesFormationComponent,
    AllFormationComponent,
    AddFormationComponent,
    MonProfilComponent,
    EconomieGestionComponent,
    SciencesExperimentalesComponent,
    TechniqueComponent,
    MathematiquesComponent,
    UpdateProfilDialogComponent,
    DocumentComponent,
    LettresComponent,
    InformatiqueComponent,
    AjoutDocumentComponent,
    PasswordForgottenComponent,
    ResetPasswordComponent,
    AjoutMeetingComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatButtonModule,MatInputModule,
    MatIconModule,MatCheckboxModule,
    MatTabsModule,
    StoreModule.forRoot({}, {}),
    NbThemeModule.forRoot(),
    MDBBootstrapModule,NgbModule,FileUploadModule,ButtonModule,DialogModule,
    NbFormFieldModule,NbEvaIconsModule, NbIconModule,NbInputModule,NbCardModule, NbLayoutModule, 
    ToastModule, NbSelectModule 
  ],
  providers: [FormService, MessageService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
