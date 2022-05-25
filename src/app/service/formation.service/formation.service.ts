import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }


  addFormation(formation: any,id:number): Observable<any> {
    return this.http.post(environment.urlFormation+`saveFormation/${id}`, formation);
  
  }


}
