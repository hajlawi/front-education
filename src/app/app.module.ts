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
    MDBBootstrapModule,NgbModule,FileUploadModule,ButtonModule,DialogModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
