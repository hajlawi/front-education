import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/formation.model';
import { environment } from '../../../environments/environment';
import { Video } from '../../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }
formation:any;

  addFormation(formation: any,id:number): Observable<any> {
    return this.http.post(environment.urlFormation+`saveFormation/${id}`, formation);
  
  }
  imageUploadAction(imageFormData: FormData, id: number): Observable<any> {
    return this.http.post(`http://localhost:8099/api/vdFormation/upload/video/${id}`,
     imageFormData, { observe: 'response' })

  }
getFormation(id: number){
    return this.http.get<Formation>(`${environment.urlFormation}formation/${id}`);
}

saveFormation(formation:Formation,id: number,Video:any):Observable<any>{
 return this.http.post(`http://localhost:8099/saveFormation/${id}`,formation,Video);
 
}


saveFormation2(myform:any){

  return this.http.post(`http://localhost:8099/api/formation/saveFormation`,myform);
}
}
