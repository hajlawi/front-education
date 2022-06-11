import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { environment } from 'src/environments/environment';
import { FileData } from '../models/file-data.model';

@Injectable({
  providedIn: 'root'
})
export class UploadFileServiceService {

  constructor(private http: HttpClient) {
  }

  upload(file: File,id:any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.urlFile}/uploadfile/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
  download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${environment.urlFile}/${file}`, {
      responseType: 'blob'
    });
  }


  getFile(): Observable<any>{
    return this.http.get(`${environment.urlFile}/files`);
  }
  

  list(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.urlFile}/files`);
  }

  listFileByMatiere(id:number): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.urlFile}/listFiles/${id}`);
  }

  addDoc(doc:any,id:number):Observable<any>{
    return this.http.post(`http://localhost:8099/api/document/saveDocument/${id}`,doc);

  }
  addDocument(doc:any):Observable<any>{
    return this.http.post(`http://localhost:8099/api/document/saveDocument/`,doc);

  }
  uploadfile(file: File,id:number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.urlFile}/uploadfile/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  
}
