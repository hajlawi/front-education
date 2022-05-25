import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private http: HttpClient) { }
  getEnseignant(id:number): Observable<any> {
    return this.http.get(environment.urlEnseignant+`enseignant/${id}`);
  
  }
}
