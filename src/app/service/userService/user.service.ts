import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../components/core/models/user';

const API_URL = 'http://localhost:8093/service/';
const API_PWD = 'http://localhost:8093/resetmdp/';
const API_CONTACT = 'http://localhost:8093/api/contact/';
const API_IMG = 'http://localhost:8093/api/imageUser/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_URL+'users/list');
  }

  getUser(id: number){
    return this.http.get<User>(`${API_URL}users/${id}`);
  }

  getImage(id: number): Observable<Blob> {
    return this.http.get(`${API_IMG}image/${id}`, {responseType: "blob"});
   //return this.http.get(`${API_IMG}image/${id}`);
  }
  addUser(data: any): Observable<any> {
    return this.http.post(API_URL+'users/add', data);
  
  }

//add profile picture
//ajouter images
addImgUser(userId: number,file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('image', file);

  const req = new HttpRequest('POST', `${API_IMG}add/${userId}`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}



//update image
updateImgUser(userId: number,file: File): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();

  formData.append('image', file);

  const req = new HttpRequest('PUT', `${API_IMG}update/${userId}`, formData, {
    reportProgress: true,
    responseType: 'json'
  });

  return this.http.request(req);
}
//get user with image
getUsersImgs(): Observable<any> {
  return this.http.get(API_URL+'allUsers');
}
  updateUser(id: number, data:any): Observable<any> {
    return this.http.put(`${API_URL}users/${id}`, data);
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${API_URL}users/${id}`);
  }

  sendMailResetMdp(data: any): Observable<any> {
    return this.http.post(`${API_PWD}forgot_password`,data);
  }

  resetMdp(data: any): Observable<any> {
    return this.http.post(`${API_PWD}reset_password`,data);
  }


  //contact the application hostun
  contactUs(data: any): Observable<any> {
    return this.http.post(`${API_CONTACT}sendMessage`,data);
  }
  imageUploadAction(imageFormData: FormData, id: number): Observable<any> {
    return this.http.post(`http://localhost:8093/api/imageUser/upload/image/${id}`,
     imageFormData, { observe: 'response' })

  }

}