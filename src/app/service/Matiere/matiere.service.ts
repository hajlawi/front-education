import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Matiere } from '../../models/matiere.model';
@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  constructor(private http: HttpClient) { }

  getMatiere(id:number): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(`http://localhost:8099/api/matiere/listMatiere/${id}`);
  
  }
}
