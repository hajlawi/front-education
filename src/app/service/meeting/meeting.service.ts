import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  addMeeting(meet:any):Observable<any>{
    return this.http.post(`${environment.urlMeeting}`,meet);

  }
}
