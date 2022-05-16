import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  user: any;
  constructor(private Http: HttpClient) { }

  createUser(myform:any){
    this.user = {
      'nom': myform.value.nom,
      'prenom': myform.value.prenom,
      'numTel': myform.value.numTel,
      'email': myform.value.email,
      'password': myform.value.password,
      'profil':myform.value.profil,
      'role': ['']
    }
    console.log(this.user);

    //return this.Http.post(this.urlProviders + '/add', this.provider,{ headers });
    return this.Http.post(environment.urlRegistration, this.user);
  }
}
