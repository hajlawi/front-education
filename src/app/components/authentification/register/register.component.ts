import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../core/service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  chide = true;
  public mode:boolean=false;

  constructor(private service: RegistrationService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      numTel: ['', Validators.required],
      profil: ['', Validators.required],
      email: ['',[Validators.required, Validators.email, 
        Validators.minLength(5)],
      ],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      //this.router.navigate(['/dashboard/main']);
      console.log(this.loginForm);
     //profil
      this.service.createUser(this.loginForm).pipe().subscribe(
        response => {
          console.log(response);
          alert("Inscription avec succes!")
          this.router.navigate(['/login']);
        }
      );
    }
  }

isSelected(){
 if(this.loginForm.get('profil')?.value=="enseignant") 
this.mode=true;
else if(this.loginForm.get('profil')?.value=="etudiant") 
this.mode=false;
}
}
