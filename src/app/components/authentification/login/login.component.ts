import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/service/FormService.service';
import { customEmailValidator, passwordStrengthValidator } from 'src/app/utils/validators.util';
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
  currentUser: User;
  showPassword = true;
  user = sessionStorage.getItem('currentUser');
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
    public formService: FormService,
  ) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, customEmailValidator()],
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
      this.error = 'utilisateur ou mot de passe invalide';
      this.loginForm.markAllAsTouched()
      return;
    } else {
      this.authService
        .login(this.f['email'].value, this.f['password'].value)
        .subscribe(
          (res) => {
            if (res) {
              this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
              const token = this.authService.currentUserValue.accessToken;
              if (token) {
                let BearerToken = 'Bearer ' + this.authService.currentUserValue.accessToken;
                sessionStorage.setItem('bearerToken', BearerToken);
                this.router.navigate(['/welcome']);
              }
            } else {
              this.messageService.add({ severity: 'error', summary: 'Problème d\'authentification', detail: 'Address mail ou mot de passe invalide.' });
              this.error = 'Invalid Login';
            }
          },
          (error) => {
            this.messageService.add({ severity: 'error', summary: 'Problème d\'authentification', detail: 'Address mail ou mot de passe invalide.' });

            this.error = error;
            this.submitted = false;
          }
        ), () => { }, () => {
        };

    }
  }

  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
