import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user';

import { AuthService } from '../../core/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  public currentUser: User;
 user= sessionStorage.getItem('currentUser');
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .subscribe(
          (res) => {
            if (res) {
              console.log(res);
              const token = this.authService.currentUserValue.accessToken;
              console.log(token);
              if (token) {
                let BearerToken = 'Bearer ' + this.authService.currentUserValue.accessToken;
                sessionStorage.setItem('bearerToken', BearerToken);
               // this.authService.currentUserHotel().subscribe((data) => {})
             /*  this.currentUser=JSON.parse(sessionStorage.getItem('currentUser') || '{}')
              if(this.currentUser.state=="enseignant") 
                this.router.navigate(['/enseignant']);
                else if(this.currentUser.state=="etudiant")
                this.router.navigate(['/etudiant']);
                  */
               this.router.navigate(['/welcome']);
              }
            } else {
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
      );

    }
  }




  getStatutUser(){
  
  }


}
