import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`${environment.urlAuth}`, {
        email,
        password,
      })
      .pipe(
        map((user) => {
          console.log(this.currentUserSubject);
          // store user details and jwt token in session storage to keep user logged in between page refreshes
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          //this.currentUserSubject = user;
          //console.log(this.currentUserSubject["accessToken"]);
          this.currentUserSubject.next(user);
          console.log(this.currentUserSubject);
          return user;
        })
      );
  }

 /* currentUserHotel() {
    return this.http.get<Hotel>(`${environment.urlHotel}`+'userHotel/'+this.currentUserSubject.value.id)
      .pipe(
        map((hotel) => {
          sessionStorage.setItem('currentUserHotel', JSON.stringify(hotel));
        }));
  }
*/

getStatutUser(){
  
}
  isUserLoggedIn() {
    let currentUser = sessionStorage.getItem('currentUser')
    let token = sessionStorage.getItem('bearerToken')
    return (!(currentUser === null)&&!(token === null))   // true or false
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.clear();
   this.currentUserSubject.next(null!);
   
    return of({ success: false });
  }
}
