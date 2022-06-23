import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/app/service/FormService.service';
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
  mode:boolean=false;
  showPassword = true;
  showConfirmPassword = true;
  selectedOption :string ;

  constructor(private service: RegistrationService, private formBuilder: FormBuilder, private router: Router, 
    public formService: FormService) {
      this.selectedOption="enseignant"
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
      this.loginForm.markAllAsTouched()
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

  selectedProfilChange(event :any ){
 if(event=="enseignant") 
this.mode=true;
else if(event=="etudiant") 
this.mode=false;
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
toggleShowConfirmPassword(){
  this.showConfirmPassword = !this.showConfirmPassword;
}

}
