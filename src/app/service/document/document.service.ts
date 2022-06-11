import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }
  
  getDocument(id:number): Observable<Document[]> {
    return this.http.get<Document[]>(`${environment.urlDoc}/listDocument/${id}`);
  
  }

}
